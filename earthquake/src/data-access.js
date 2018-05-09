class DataAccess {
  constructor() {
    this.apiCall;
  }

  apiCallUSGS(startTime, endTime) {
    this.apiCall = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startTime}&endtime=${endTime}`;
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
}

export { DataAccess };
