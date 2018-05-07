import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-carousel',
  templateUrl: './browse-carousel.component.html',
  styleUrls: ['./browse-carousel.component.css'],
  providers: [VideoService]
})

export class BrowseCarouselComponent implements OnInit {
  @Input() maxPositions: number;
  carouselPosition: number = 0;
  videos: Video[];

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
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

  loadVideo(clickedVideo: Video) {
    this.router.navigate(['videos', clickedVideo.id]);
  }
}
