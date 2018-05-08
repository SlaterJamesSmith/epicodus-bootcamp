import { Component } from '@angular/core';
import { YouTubeApiService } from './youtube-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YouTubeApiService]
})

export class AppComponent {
  clicker: string;
  effect: string;

  constructor(private youTubeApiService: YouTubeApiService) { }

  activateBtn(button: string) {
    this.clicker = button;
    this.effect = 'circle activate';
  }

  deactivateBtn(button: string) {
    setTimeout(() => {
      this.effect = 'circle deactivate';
    },150);
  }

  checkClicker(button: string) {
    if (button === this.clicker) {
      return this.effect;
    } else {
      return 'circle';
    }
  }

  searchYouTubeVideos() {
    this.youTubeApiService.search();
  }
}
