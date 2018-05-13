import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { youtubeApiConfig } from './api-keys';

@Injectable()
export class YouTubeApiService {

  constructor(private http: Http) { }

  getVideo(videoId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?key=${youtubeApiConfig.apiKey}&id=${videoId}&part=contentDetails,snippet,statistics`);
  }

  getVideoList(listId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${youtubeApiConfig.apiKey}&playlistId=${listId}&maxResults=6&part=snippet`);
  }

  getChannel(channelId: string) {
    return this.http.get(`https://www.googleapis.com/youtube/v3/channels?key=${youtubeApiConfig.apiKey}&id=${channelId}&part=contentDetails,snippet,statistics`);
  }
}
