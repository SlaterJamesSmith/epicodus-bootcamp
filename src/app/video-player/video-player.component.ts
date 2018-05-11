import { Component, OnInit } from '@angular/core';
import { YTVideo } from '../models/ytVideo.model';
import { YouTubeApiService } from '../youtube-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  providers: [YouTubeApiService]
})
export class VideoPlayerComponent implements OnInit {
  videoId: string;
  video: YTVideo;
  iframeHeight: number;
  embedUrl;

  constructor(private youTubeApiService: YouTubeApiService, private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoId = this.route.params['_value']['id'];
    this.youTubeApiService.getVideo(this.videoId).subscribe(response => {
      this.video = new YTVideo(
        response.json().items[0].id,
        response.json().items[0].snippet.localized.title,
        response.json().items[0].snippet.localized.description,
        response.json().items[0].snippet.channelId,
        response.json().items[0].snippet.channelTitle,
        response.json().items[0].snippet.thumbnails.high.url,
        response.json().items[0].contentDetails.duration,
        response.json().items[0].snippet.publishedAt,
        response.json().items[0].statistics.viewCount,
        response.json().items[0].statistics.likeCount,
        response.json().items[0].statistics.dislikeCount
      );
    });
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
