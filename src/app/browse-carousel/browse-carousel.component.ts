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
  carouselPosition: number = 0;
  channel: YTChannel;
  videos: YTVideo[] = [];
  channelId: string = 'UCsn6cjffsvyOZCZxvGoJxGg';

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
      this.initiatePlaylist(this.channel.uploadsPlaylist)
    });
  }

  initiatePlaylist(listId) {
    this.youTubeApiService.getVideoList(listId).subscribe(response => {
      response.json().items.forEach((item) => {
        let video = new YTVideo(
          item.snippet.resourceId.videoId,
          item.snippet.title,
          item.snippet.description,
          item.snippet.channelId,
          item.snippet.channelTitle,
          item.snippet.thumbnails.medium.url,
          null,
          item.snippet.publishedAt,
          null,
          null,
          null
        );
        this.videos.push(video);
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
