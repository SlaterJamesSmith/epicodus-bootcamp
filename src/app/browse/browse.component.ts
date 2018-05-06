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
  offset: number = 0;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
  }

  loadVideo(clickedVideo: Video) {
    this.router.navigate(['videos', clickedVideo.id]);
  }

  scrollLeft() {
    this.offset += 214;
  }

  scrollRight() {
    this.offset -= 214;
  }
}
