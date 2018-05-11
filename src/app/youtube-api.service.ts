import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { youtubeApiConfig } from './api-keys';

@Injectable()
export class YouTubeApiService {

  constructor(private http: Http) { }

  search() {
    this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${youtubeApiConfig.apiKey}
   &part=snippet,statistics&fields=items(id,snippet,statistics)`).subscribe(response => {
     console.log(response.json());
   });
  }
}
