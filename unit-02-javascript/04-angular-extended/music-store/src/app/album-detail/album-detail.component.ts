import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../models/album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: string;
  album: Album;

  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

  ngOnInit() {
    this.albumId = this.route.params['_value']['id'];
    this.albumService.getAlbumById(this.albumId).subscribe(data => {
      this.album = new Album (data.title, data.artist, data.description);
    });
  }
}
