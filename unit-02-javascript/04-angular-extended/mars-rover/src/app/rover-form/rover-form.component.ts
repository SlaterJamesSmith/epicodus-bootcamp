import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverPhotosApiService } from '../mars-rover-photos-api.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverPhotosApiService, PhotoService]
})

export class RoverFormComponent {
  photos: any[];

  constructor(private marsRoverPhotos: MarsRoverPhotosApiService) { }

  getRoverImages(date: string, camera: string) {
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(data => {
      if (data.json().photos.length > 0) {
        this.photos = data.json();
      } else {
        this.photos = null;
      }
    });
  }

  saveRoverImages(date, camera) {
    this.marsRoverPhotos.saveImages(date, camera);
    alert(`The images from ${date} taken by the ${camera} camera have been saved to the database.`);
  }
}
