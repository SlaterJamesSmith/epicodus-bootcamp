import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { YTVideo } from '../models/ytvideo.model';
import { YouTubeApiService } from '../youtube-api.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [YouTubeApiService, AccountService]
})
export class SearchComponent implements OnInit {
  clicker: string;
  effect: string;
  videoTarget: string;
  preventClickOut: boolean = false;
  query: string;
  pageToken: string = null;
  videos: YTVideo[] = [];
  waitForNewQuery;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private youTubeApiService: YouTubeApiService, private accountService: AccountService) { }

  ngOnInit() {
    this.waitForNewQuery = this.route.params.subscribe(response => {
      this.videos = [];
      this.query = this.route.params['_value']['query'];
      this.youTubeApiService.searchVideos(this.query).subscribe(response => {
        let videoList = response.json();
        this.pageToken = videoList.nextPageToken;
        videoList.items.forEach(video => {
          this.gatherVideo(video);
        });
      });
    });
  }

  gatherVideo(video) {
    this.youTubeApiService.getVideo(video.id.videoId).subscribe(response => {
      let videoData = response.json().items[0];
      let video = new YTVideo(
        videoData.id,
        videoData.snippet.localized.title,
        videoData.snippet.localized.description.slice(0, 125) + ' ...',
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
  }

  detectScrollLimit() {
    let contentHeight = document.body.scrollHeight;
    let scrollPosition = window.scrollY + window.innerHeight;
    if(scrollPosition === contentHeight) {
      this.youTubeApiService.searchVideosNextPage(this.query, this.pageToken).subscribe(response => {
        let videoList = response.json();
        this.pageToken = videoList.nextPageToken;
        videoList.items.forEach(video => {
          this.gatherVideo(video);
        });
      });
    }
  }

  addToFavorites(video) {
    this.accountService.addFavoriteVideo(video);
  }

  addToWatchList(video) {
    this.accountService.addWatchListVideo(video);
  }

  channelSubscribe(channel) {
    this.accountService.channelSubscribe(channel);
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
