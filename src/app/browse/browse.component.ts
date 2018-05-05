import { Component } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  masterVideos: Video[] = [
    new Video('Anime Self-Driving Cars', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/4ZX7HbkdZ_s'),
    new Video('ANIME FIDGET SPINNERS', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/6kIsEzEmI9w'),
    new Video('Mad Max: Roadkill BBQ', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/nDG-l5Y9O64')
  ];
}
