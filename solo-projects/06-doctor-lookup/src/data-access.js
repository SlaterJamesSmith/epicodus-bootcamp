import { Provider } from './provider.js';

class DataAccess {
  constructor() {
    this.apiCall;
    this.apiResponse;
    this.dataOut;
  }

  apiCallBetterDoctor(name, query) {
    this.apiCall = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=45.5231,-122.6765,50&skip=0&limit=100&user_key=${process.env.exports.apiKey}`;
      request.responseType = 'json';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }

  parseData() {
    this.dataOut = [];
    this.apiResponse.forEach((betterDoctor) => {
      let provider = new Provider();
      provider.uid = betterDoctor.uid;
      provider.firstName = betterDoctor.profile.first_name;
      provider.lastName = betterDoctor.profile.last_name;
      provider.imageUrl = betterDoctor.profile.image_url;
      // Sort provider practice locations by latitude.
      betterDoctor.practices.sort(function (a, b) {
        return a.lat - b.lat;
      });
      for (let i = 0; i < betterDoctor.practices.length; i++) {
        if (betterDoctor.practices[i].within_search_area) {
          // Compare latitude and longitude between adjacent array elements.
          let currentLatLng = betterDoctor.practices[i].lat + ' ' + betterDoctor.practices[i].lon;
          let currentStreet = betterDoctor.practices[i].visit_address.street;
          let nextLatLng = null;
          let nextStreet = null;
          if (i < betterDoctor.practices.length - 1) {
            nextLatLng = betterDoctor.practices[i + 1].lat + ' ' + betterDoctor.practices[i + 1].lon;
            nextStreet = betterDoctor.practices[i + 1].visit_address.street;
          }
          // Skip locations with same latitude and longitude
          if (currentLatLng !== nextLatLng && currentStreet !== nextStreet) {
            let practice = {
              acceptsNewPatients: betterDoctor.practices[i].accepts_new_patients,
              address: {
                lat: betterDoctor.practices[i].lat,
                lng: betterDoctor.practices[i].lon,
                street: betterDoctor.practices[i].visit_address.street,
                city: betterDoctor.practices[i].visit_address.city,
                state: betterDoctor.practices[i].visit_address.state,
                zip: betterDoctor.practices[i].visit_address.zip
              },
              phones: [],
              fax: [],
              website: betterDoctor.practices[i].website
            };
            // Separate phones from faxes.
            betterDoctor.practices[i].phones.forEach(function(contact) {
              let device = {
                number: contact.number,
                type: contact.type
              };
              if (device.type.includes('fax')) {
                practice.fax.push(device);
              } else {
                practice.phones.push(device);
              }
            });
            provider.practices.push(practice);
          }
        }
      }
      // Parse provider specialties.
      betterDoctor.specialties.forEach(function(category) {
        let specialty = {
          name: category.name,
          description: category.description
        };
        provider.specialties.push(specialty);
      });
      if (provider.practices.length !== 0) {
        this.dataOut.push(provider);
      }
    });
  }
}

export { DataAccess };
