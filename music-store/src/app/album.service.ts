import { Injectable } from '@angular/core';
import { Album } from './models/album.model';
import { ALBUMS } from './albums-data';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId) {
    for (let i = 0; i < ALBUMS.length; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }
}
