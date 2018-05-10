import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverPhotosApiService } from '../mars-rover-photos-api.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [MarsRoverPhotosApiService]
})

export class RoverFormComponent {
  photos: any[];
  noPhotos: boolean = false;

  constructor(private marsRoverPhotos: MarsRoverPhotosApiService) { }

  getRoverImages(date: string, camera: string) {
    this.photos = null;
    this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(data => {
      if (data.json().photos.length > 0) {
        this.photos = data.json();
      }
    });
  }
}
