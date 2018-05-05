import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [VideoService]
})
export class VideoPlayerComponent implements OnInit {
  videoId: string;
  video: Video;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.video = this.videoService.getVideoById(this.videoId);
  }

}
