class DataAccess {
  testMessage() {
    console.log("DataAccessTestMessage: CLASS IMPORT SUCCESSFUL");
  }

  apiCallBetterDoctor(name) {
    let promise;
    return promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.5231,-122.6765,50&skip=0&limit=100&user_key=${process.env.exports.apiKey}`;
      request.responseType = 'json';
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open('GET', url, true);
      request.send();
    });
  }
}

export { DataAccess };
