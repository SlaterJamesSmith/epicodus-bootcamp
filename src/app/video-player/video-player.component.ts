import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

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
  embedUrl;

  constructor(private videoService: VideoService, private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.forEach((urlParams) => {
      this.videoId = urlParams.id;
    });
    this.video = this.videoService.getVideoById(this.videoId);
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
    this.buildEmbedUrl(this.videoId);
  }

  buildEmbedUrl(id: string) {
    let nonTrustedUrl = 'https://www.youtube.com/embed/' + id;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(nonTrustedUrl);
  }

  resizeHeight() {
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
  }
}
