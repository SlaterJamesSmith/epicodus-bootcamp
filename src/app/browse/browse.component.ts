import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [VideoService]
})

export class BrowseComponent implements OnInit {
  videos: Video[];
  maxPosition: number;
  carouselPosition: number = 0;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    this.calcCarouselLimit();
  }

  calcCarouselLimit() {
    let carouselWidth: number = document.getElementById("carousel-all").clientWidth;
    if (carouselWidth < 638) {
      this.maxPosition = 4;
    } else if (carouselWidth < 852) {
      this.maxPosition = 3;
    } else if (carouselWidth < 1046) {
      this.maxPosition = 2;
    } else {
      this.maxPosition = 1;
    }
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
