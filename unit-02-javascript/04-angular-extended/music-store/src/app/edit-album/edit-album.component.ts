import { Component, Input } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})

export class EditAlbumComponent {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  initiateUpdate(album) {
    this.albumService.updateAlbum(album);
  }

  initiateDelete(album) {
    if(confirm('Are you sure you want to delete item?')) {
      this.albumService.deleteAlbum(album);
    }
  }
}
