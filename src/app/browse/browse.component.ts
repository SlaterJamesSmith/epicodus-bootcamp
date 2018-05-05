import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  providers: [VideoService]
})

export class BrowseComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
  }
}
