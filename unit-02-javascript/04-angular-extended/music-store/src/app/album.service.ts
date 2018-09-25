import { Injectable } from '@angular/core';
import { Album } from './models/album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId) {
    return this.database.object('albums/' + albumId);
  }

  updateAlbum(localAlbum) {
    let albumInFirebase = this.getAlbumById(localAlbum.$key);
    albumInFirebase.update({title: localAlbum.title,
                            artist: localAlbum.artist,
                            description: localAlbum.description});
  }

  deleteAlbum(localAlbum) {
    let albumInFirebase = this.getAlbumById(localAlbum.$key);
    albumInFirebase.remove();
  }
}
