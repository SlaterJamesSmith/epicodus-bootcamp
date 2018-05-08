import { Injectable } from '@angular/core';
import { youtubeApiConfig } from './api-keys';

@Injectable()
export class YouTubeApiService {
  apiCall;

  search() {
    this.apiCall = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${youtubeApiConfig.apiKey}
     &part=snippet,statistics&fields=items(id,snippet,statistics)`;
      request.responseType = 'json';
      request.onload = function() {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.send();
    });

    this.apiCall.then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(error);
    })
  }
}
