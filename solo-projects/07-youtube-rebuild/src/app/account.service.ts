import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { YTVideo } from './models/ytvideo.model';
import { YTChannel } from './models/ytchannel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {
  watchListVideos: FirebaseListObservable<any[]>;
  favoriteVideos: FirebaseListObservable<any[]>;
  channelSubs: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.favoriteVideos = this.database.list('favoriteVideos');
    this.watchListVideos = this.database.list('watchListVideos');
    this.channelSubs = this.database.list('channelSubs');
  }

  addFavoriteVideo(video) {
    this.favoriteVideos.push(video);
  }

  addWatchListVideo(video) {
    this.watchListVideos.push(video);
  }

  channelSubscribe(channel) {
    this.channelSubs.push(channel);
  }

  getFavoriteVideos() {
    return this.favoriteVideos;
  }

  getWatchListVideos() {
    return this.watchListVideos;
  }

  getChannelSubs() {
    return this.channelSubs;
  }

  deleteWatchListVideo(video) {
    let selectedVideo = this.getWatchListVideoById(video.$key);
    selectedVideo.remove();
  }

  getWatchListVideoById(videoId: string) {
    return this.database.object('watchListVideos/' + videoId);
  }

  deleteFavoriteVideo(video) {
    let selectedVideo = this.getFavoriteVideoById(video.$key);
    selectedVideo.remove();
  }

  getFavoriteVideoById(videoId: string) {
    return this.database.object('favoriteVideos/' + videoId);
  }

  deleteChannel(channel) {
    let selectedChannel = this.getChannelById(channel.$key);
    selectedChannel.remove();
  }

  getChannelById(channelId: string) {
    return this.database.object('channelSubs/' + channelId);
  }
}
