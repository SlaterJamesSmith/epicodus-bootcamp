import { Injectable } from '@angular/core';
import { Video } from './models/video.model';
import { VIDEOS } from './video-data';

@Injectable()
export class VideoService {

  constructor() { }

  getVideos() {
    return VIDEOS;
  }

  getVideoById(videoId: string) {
    for (let i = 0; i < VIDEOS.length; i++) {
      if (VIDEOS[i].id === videoId) {
        return VIDEOS[i];
      }
    }
  }
}
