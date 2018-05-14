import { Component, OnInit } from '@angular/core';
import { YTChannel } from '../models/ytchannel.model';
import { YouTubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [YouTubeApiService]
})

export class BrowseComponent implements OnInit {
  carouselWidth: number;
  maxCarouselPositions: number;
  channelQueue: YTChannel[] = [];
  channelIdList = new Set([
    'UCfHOECFpULowQMJZonvudig',
    'UCsn6cjffsvyOZCZxvGoJxGg',
    // 'UCWp2Kj8aD9XlCGiIZzwHciw',
    // 'UC3KpzBeoM8lDvn85m4szzfA'
  ]);
  pageToken: string = null;

  constructor(private youTubeApiService: YouTubeApiService) { }

  ngOnInit() {
    this.calcCarouselLimits();
    this.gatherChannels(this.channelIdList);
    // this.youTubeApiService.searchChannels(['/m/02jjt']).subscribe(response => {
    //   let data = response.json();
    //   this.pageToken = data.nextPageToken;
    //   data.items.forEach(channel => {
    //     this.channelIdList.add(channel.snippet.channelId);
    //   });
    // });
  }

  gatherChannels(channelIds) {
    channelIds.forEach(channelId => {
      this.youTubeApiService.getChannel(channelId).subscribe(response => {
        let channelData = response.json().items[0];
        let channel = new YTChannel(
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
        this.channelQueue.push(channel);
      });
    });
  }

  detectScrollLimit() {
    // let contentHeight = document.body.scrollHeight;
    // let scrollPosition = window.scrollY + window.innerHeight;
    // if(scrollPosition === contentHeight) {
    //   this.channelIdList = new Set([]);
    //   this.youTubeApiService.searchChannelsNextPage(['/m/02jjt'], this.pageToken).subscribe(response => {
    //     let data = response.json();
    //     this.pageToken = data.nextPageToken;
    //     data.items.forEach(channel => {
    //       this.channelIdList.add(channel.snippet.channelId);
    //     });
    //     this.gatherChannels(this.channelIdList);
    //   });
    // }
  }

  calcCarouselLimits() {
    let availableWidth = document.getElementById('carousel-all').clientWidth;
    if (availableWidth < 638) {
      this.carouselWidth = 424;
      this.maxCarouselPositions = 4;
    } else if (availableWidth < 852) {
      this.carouselWidth = 638;
      this.maxCarouselPositions = 3;
    } else if (availableWidth < 1066) {
      this.carouselWidth = 852;
      this.maxCarouselPositions = 2;
    } else {
      this.carouselWidth = 1066;
      this.maxCarouselPositions = 1;
    }
  }
}
