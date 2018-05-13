import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YTChannel } from '../models/ytchannel.model';
import { YTVideo } from '../models/ytvideo.model';
import { YouTubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-browse-carousel',
  templateUrl: './browse-carousel.component.html',
  styleUrls: ['./browse-carousel.component.css'],
  providers: [YouTubeApiService]
})

export class BrowseCarouselComponent implements OnInit {
  @Input() carouselWidth: number;
  @Input() maxCarouselPositions: number;
  @Input() channelId: string;
  carouselPosition: number = 0;
  channel: YTChannel;
  videos: YTVideo[] = [];

  constructor(private youTubeApiService: YouTubeApiService, private router: Router) { }

  ngOnInit() {
    this.youTubeApiService.getChannel(this.channelId).subscribe(response => {
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
      this.initiatePlaylist(this.channel.uploadsPlaylist);
    });
  }

  initiatePlaylist(listId) {
    this.youTubeApiService.getVideoList(listId).subscribe(response => {
      response.json().items.forEach((item) => {
        this.youTubeApiService.getVideo(item.snippet.resourceId.videoId).subscribe(response => {
          let video = new YTVideo(
            response.json().items[0].id,
            response.json().items[0].snippet.localized.title,
            response.json().items[0].snippet.localized.description,
            response.json().items[0].snippet.channelId,
            response.json().items[0].snippet.channelTitle,
            response.json().items[0].snippet.thumbnails.medium.url,
            response.json().items[0].contentDetails.duration,
            response.json().items[0].snippet.publishedAt,
            response.json().items[0].statistics.viewCount,
            response.json().items[0].statistics.likeCount,
            response.json().items[0].statistics.dislikeCount
          );
          this.videos.push(video);
        });
      });
    });
  }

  getCarouselPosition() {
    return `carousel-inner carousel-position-${this.carouselPosition}`;
  }

  scrollLeft() {
    this.carouselPosition--;
  }

  scrollRight() {
    this.carouselPosition++;
  }

  loadVideo(clickedVideo: YTVideo) {
    this.router.navigate(['videos', clickedVideo.id]);
  }
}
