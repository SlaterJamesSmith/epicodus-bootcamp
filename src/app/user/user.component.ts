import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { YouTubeApiService } from '../youtube-api.service';
import { AccountService } from '../account.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [YouTubeApiService, AccountService]
})
export class UserComponent implements OnInit {
  watchListVideos: any[] = [];
  favoriteVideos: any[] = [];
  channelSubs: any[] = [];
  clicker: string;
  effect: string;
  videoTarget: string;
  preventClickOut: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private youTubeApiService: YouTubeApiService, private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getWatchListVideos().subscribe(response => {
      this.watchListVideos = response;
    });
    this.accountService.getFavoriteVideos().subscribe(response => {
      this.favoriteVideos = response;
    });
    this.accountService.getChannelSubs().subscribe(response => {
      this.channelSubs = response;
    });
    console.log(this.channelSubs)
  }

  addToFavorites(video) {
    this.accountService.addFavoriteVideo(video);
  }

  deleteWatchListVideo(video) {
    this.accountService.deleteWatchListVideo(video);
  }

  deleteFavoriteVideo(video) {
    this.accountService.deleteFavoriteVideo(video);
  }

  deleteChannel(channel) {
    this.accountService.deleteChannel(channel);
  }

  loadVideo(clickedVideo) {
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
