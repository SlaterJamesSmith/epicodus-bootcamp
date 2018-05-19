import { Injectable } from '@angular/core';
import { Photo } from './models/photo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PhotoService {
  photos: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.photos = af.list('photos');
  }

  getPhotos() {
    return this.photos;
  }

  addPhoto(photo: Photo) {
    this.photos.push(photo);
  }

  deletePhoto(photo) {
    let foundPhoto = this.getPhotoById(photo.$key);
    foundPhoto.remove();
  }

  getPhotoById(photoId: string) {
    return this.af.object('photos/' + photoId);
  }
}
