import { Provider } from './provider.js';

class DataAccess {
  apiCallBetterDoctor(name, query) {
    let promise;
    return promise = new Promise(function(resolve, reject) {
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

  parseData(response) {
    let responseData = response.data;
    let providerData = [];
    for (let i = 0; i < responseData.length; i ++) {
      let provider = new Provider();
      provider.firstName = responseData[i].profile.first_name;
      provider.lastName = responseData[i].profile.last_name;
      for (let j = 0; j < responseData[i].practices.length; j ++) {
        let practice = {
          acceptsNewPatients: responseData[i].practices[j].accepts_new_patients,
          address: {
            lat: responseData[i].practices[j].lat,
            lng: responseData[i].practices[j].lon,
            street: responseData[i].practices[j].visit_address.street,
            city: responseData[i].practices[j].visit_address.city,
            state: responseData[i].practices[j].visit_address.state,
            zip: responseData[i].practices[j].visit_address.zip
          },
          phone: responseData[i].practices[j].phones[0].number
        }
        provider.practices.push(practice);
      }
      for (let k = 0; k < responseData[i].specialties.length; k ++) {
        let specialty = {
          name: responseData[i].specialties[k].name,
          description: responseData[i].specialties[k].description
        }
        provider.specialties.push(specialty);
      }
      providerData.push(provider);
    }
    return providerData;
  }
}

export { DataAccess };
