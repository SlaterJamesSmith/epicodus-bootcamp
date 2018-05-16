import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { YTVideo } from '../models/ytvideo.model';
import { YouTubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [YouTubeApiService]
})
export class SearchComponent implements OnInit {
  query: string;
  videos: YTVideo[] = [];

  constructor(private route: ActivatedRoute, private location: Location, private youTubeApiService: YouTubeApiService) { }

  ngOnInit() {
    this.query = this.route.params['_value']['query'];
    this.youTubeApiService.searchVideos(this.query).subscribe(response => {
      let videoList = response.json().items;
      videoList.forEach(video => {
        this.youTubeApiService.getVideo(video.id.videoId).subscribe(response => {
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
    console.log(this.videos);
  }
}
