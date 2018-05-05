import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [VideoService]
})
export class VideoPlayerComponent implements OnInit {
  videoId: string;
  video: Video;
  iframeHeight: number;

  constructor(private videoService: VideoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.videoId = urlParams.id;
    });
    this.video = this.videoService.getVideoById(this.videoId);
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
  }

  resizeHeight() {
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
  }
}
