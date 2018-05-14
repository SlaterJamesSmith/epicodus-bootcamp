import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { YTVideo } from './models/ytvideo.model';
import { YTChannel } from './models/ytchannel.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AccountService {
  videos: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.videos = this.database.list('videos');
  }

  addVideo(newVideo: YTVideo) {
    this.videos.push(newVideo);
  }
}
