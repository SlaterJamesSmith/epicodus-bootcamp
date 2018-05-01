class DataAccess {
  apiCallGithub(keyword, location) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://jobs.github.com/positions.json?description=${keyword}&location=${location}`;
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
    return promise;
  }
}

export { DataAccess };
