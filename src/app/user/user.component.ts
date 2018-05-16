import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { YTVideo } from '../models/ytvideo.model';
import { YTChannel } from '../models/ytchannel.model';
import { YouTubeApiService } from '../youtube-api.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [YouTubeApiService, AccountService]
})
export class UserComponent implements OnInit {
  favoriteVideos: YTVideo[] = [];
  watchListVideos: YTVideo[] = [];
  channels: YTChannel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private youTubeApiService: YouTubeApiService, private accountService: AccountService) { }

  ngOnInit() {

  }
}
