import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YTVideo } from '../models/ytVideo.model';
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
  videos: YTVideo[] = [];
  listId = 'PLVK1Q9ppZiaCJ0a_JKw76mLwGYMMXXyD1';

  constructor(private youTubeApiService: YouTubeApiService, private router: Router) { }

  ngOnInit() {
    this.youTubeApiService.getVideoList(this.listId).subscribe(response => {
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
