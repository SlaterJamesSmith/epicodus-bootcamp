import { Component } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  masterVideos: Video[] = [
    new Video('Anime Self-Driving Cars', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/4ZX7HbkdZ_s', 'https://i.ytimg.com/vi/4ZX7HbkdZ_s/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjMNBVe8bmpjKRTBSAjhNuaIxVzw'),
    new Video('ANIME FIDGET SPINNERS', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/6kIsEzEmI9w', 'https://i.ytimg.com/vi/6kIsEzEmI9w/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCD0IqMEG5ymLyyEOQnkmo9ftEHIA'),
    new Video('Mad Max: Roadkill BBQ', 'Corridor', 'CorridorDigital', 'https://www.youtube.com/embed/nDG-l5Y9O64', 'https://i.ytimg.com/vi/nDG-l5Y9O64/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbRk8Gg2uclxxN0_6JBNhWBJa0tA')
  ];
}
