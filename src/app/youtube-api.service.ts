import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { youtubeApiConfig } from './api-keys';

@Injectable()
export class YouTubeApiService {

  constructor(private http: Http) { }

  getVideo(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeApiConfig.apiKey}
   &part=contentDetails,snippet,statistics&fields=items(id,contentDetails,snippet,statistics)`);
  }

  getVideoList(listId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${listId}&key=${youtubeApiConfig.apiKey}
   &maxResults=6&part=snippet&fields=items(snippet)`);
  }
}
