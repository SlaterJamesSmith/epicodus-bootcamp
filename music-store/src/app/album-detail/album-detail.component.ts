import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.albumId = this.route.params['_value']['id'];
  }
}
