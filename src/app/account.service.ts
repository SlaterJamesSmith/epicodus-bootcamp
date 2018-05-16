import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { YTVideo } from './models/ytvideo.model';
import { YTChannel } from './models/ytchannel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {
  favoriteVideos: FirebaseListObservable<any[]>;
  watchListVideos: FirebaseListObservable<any[]>;
  channelSubs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.favoriteVideos = this.database.list('favoriteVideos');
    this.watchListVideos = this.database.list('watchListVideos');
    this.channelSubs = this.database.list('channelSubs');
  }

  addFavoriteVideo(video: YTVideo) {
    this.favoriteVideos.push(video);
  }

  addWatchListVideo(video: YTVideo) {
    this.watchListVideos.push(video);
  }

  channelSubscribe(channel: YTChannel) {
    this.channelSubs.push(channel);
  }
}
