import { Injectable } from '@angular/core';
import { Video } from './models/video.model';
import { VIDEOS } from './video-data';

@Injectable()
export class VideoService {

  constructor() { }

  getVideos() {
    return VIDEOS;
  }
}
