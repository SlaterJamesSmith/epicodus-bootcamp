import { Component, Input } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [PhotoService]
})

export class PhotosListComponent {
  @Input() photos;

  constructor(private photoService: PhotoService) { }

  saveImage(imgUrl: string, camera: string, date: string) {
    let newPhoto: Photo = new Photo(imgUrl, camera, date);
    this.photoService.addPhoto(newPhoto);
    alert('This image has been added to your list of saved images.');
  }
}
