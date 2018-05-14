import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YTChannel } from '../models/ytchannel.model';
import { YTVideo } from '../models/ytvideo.model';
import { YouTubeApiService } from '../youtube-api.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-browse-carousel',
  templateUrl: './browse-carousel.component.html',
  styleUrls: ['./browse-carousel.component.css'],
  providers: [YouTubeApiService, AccountService]
})

export class BrowseCarouselComponent implements OnInit {
  clicker: string;
  effect: string;
  videoTarget: string;
  preventClickOut: boolean = false;
  @Input() carouselWidth: number;
  @Input() maxCarouselPositions: number;
  @Input() channel: YTChannel;
  carouselPosition: number = 0;
  videos: YTVideo[] = [];

  constructor(private youTubeApiService: YouTubeApiService, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.youTubeApiService.getVideoList(this.channel.uploadsPlaylist).subscribe(response => {
      response.json().items.forEach((item) => {
        this.youTubeApiService.getVideo(item.snippet.resourceId.videoId).subscribe(response => {
          let videoData = response.json().items[0];
          let video = new YTVideo(
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
          this.videos.push(video);
        });
      });
    });
  }

  addToFavorites(video) {
    this.accountService.addVideo(video);
  }

  channelSubscribe(channel) {
    this.accountService.addChannel(channel);
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

  activateBtn(button: string) {
    this.clicker = button;
    this.effect = 'circle-sm activate';
  }

  deactivateBtn() {
    setTimeout(() => {
      this.effect = 'circle-sm deactivate';
    }, 150);
  }

  checkClicker(button: string) {
    if (button === this.clicker) {
      return this.effect;
    } else {
      return 'circle-sm';
    }
  }

  clearClicker() {
    this.clicker = null;
  }

  optionSelect(video) {
    if (this.videoTarget === video) {
      this.videoTarget = null;
    } else {
      this.videoTarget = video;
    }
  }

  optionsActive(video) {
    if (this.videoTarget === video) {
      return 'circle-btn-sm display-flex';
    } else {
      return 'circle-btn-sm display-none';
    }
  }

  optionsOpen(video) {
    if (this.videoTarget === video) {
      return 'options-panel display-flex';
    } else {
      return 'options-panel display-none';
    }
  }

  protectClick() {
    this.preventClickOut = true;
  }

  clickOut() {
    if (this.preventClickOut === false) {
      this.videoTarget = null;
    }
    this.preventClickOut = false;
  }

  closeMenu() {
    this.videoTarget = null;
  }
}
