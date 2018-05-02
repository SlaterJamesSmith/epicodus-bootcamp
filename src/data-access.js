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
    for (let i = 0; i < this.apiResponse.length; i ++) {
      let provider = new Provider();
      provider.uid = this.apiResponse[i].uid;
      provider.firstName = this.apiResponse[i].profile.first_name;
      provider.lastName = this.apiResponse[i].profile.last_name;
      provider.imageUrl = this.apiResponse[i].profile.image_url;
      // Parse provider practice locations.
      for (let j = 0; j < this.apiResponse[i].practices.length; j ++) {
        if (this.apiResponse[i].practices[j].within_search_area) {
          // Compare Lat and Long between adjacent array elements.
          let currentLatLng = this.apiResponse[i].practices[j].lat + this.apiResponse[i].practices[j].lon;
          let nextLatLng = undefined;
          if (j < this.apiResponse[i].practices.length - 1) {
            nextLatLng = this.apiResponse[i].practices[j + 1].lat + this.apiResponse[i].practices[j + 1].lon;
          }
          // Doesn't catch non-adjacent duplicates.
          if (currentLatLng !== nextLatLng) {
            let practice = {
              acceptsNewPatients: this.apiResponse[i].practices[j].accepts_new_patients,
              address: {
                lat: this.apiResponse[i].practices[j].lat,
                lng: this.apiResponse[i].practices[j].lon,
                street: this.apiResponse[i].practices[j].visit_address.street,
                city: this.apiResponse[i].practices[j].visit_address.city,
                state: this.apiResponse[i].practices[j].visit_address.state,
                zip: this.apiResponse[i].practices[j].visit_address.zip
              },
              phones: [],
              fax: [],
              website: this.apiResponse[i].practices[j].website
            };
            // Separate phones from faxes.
            for (let k = 0; k < this.apiResponse[i].practices[j].phones.length; k ++) {
              let phone = {
                number: this.apiResponse[i].practices[j].phones[k].number,
                type: this.apiResponse[i].practices[j].phones[k].type
              };
              if (phone.type.includes('fax')) {
                practice.fax.push(phone);
              } else {
                practice.phones.push(phone);
              }
            }
            provider.practices.push(practice);
          }
        }
      }
      // Parse provider specialties.
      for (let l = 0; l < this.apiResponse[i].specialties.length; l ++) {
        let specialty = {
          name: this.apiResponse[i].specialties[l].name,
          description: this.apiResponse[i].specialties[l].description
        };
        provider.specialties.push(specialty);
      }
      this.dataOut.push(provider);
    }
  }
}

export { DataAccess };
