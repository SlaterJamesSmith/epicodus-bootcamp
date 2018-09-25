import { Component, OnInit } from '@angular/core';
import { YTVideo } from '../models/ytvideo.model';
import { YTChannel } from '../models/ytchannel.model';
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
  channel: YTChannel;
  iframeHeight: number;
  embedUrl;

  constructor(private youTubeApiService: YouTubeApiService, private route: ActivatedRoute, private location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoId = this.route.params['_value']['id'];
    this.buildEmbedUrl(this.videoId);
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
    this.youTubeApiService.getVideo(this.videoId).subscribe(response => {
      let videoData = response.json().items[0];
      this.video = new YTVideo(
        videoData.id,
        videoData.snippet.localized.title,
        videoData.snippet.localized.description,
        videoData.snippet.channelId,
        videoData.snippet.channelTitle,
        videoData.snippet.thumbnails.medium.url,
        videoData.contentDetails.duration,
        videoData.snippet.publishedAt,
        videoData.statistics.viewCount,
        videoData.statistics.likeCount,
        videoData.statistics.dislikeCount
      );
      this.youTubeApiService.getChannel(videoData.snippet.channelId).subscribe(response => {
        let channelData = response.json().items[0];
        this.channel = new YTChannel(
          channelData.id,
          channelData.snippet.title,
          channelData.snippet.description,
          channelData.snippet.thumbnails,
          channelData.snippet.publishedAt,
          channelData.statistics.subscriberCount,
          channelData.statistics.videoCount,
          channelData.statistics.viewCount,
          channelData.contentDetails.relatedPlaylists.uploads
        );
      });
    });
  }

  buildEmbedUrl(id: string) {
    let nonTrustedUrl = 'https://www.youtube.com/embed/' + id;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(nonTrustedUrl);
  }

  resizeHeight() {
    this.iframeHeight = document.getElementById("video-player").clientWidth / 1.775;
  }
}
