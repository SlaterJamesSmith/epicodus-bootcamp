import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  clicker: string;
  effect: string;

  activateBtn(button: string) {
    this.clicker = button;
    this.effect = 'circle-btn activate';
  }

  deactivateBtn(button: string) {
    this.effect = 'circle-btn';
  }

  checkClicker(button: string) {
    if (button === this.clicker) {
      return this.effect;
    } else {
      return 'circle-btn';
    }
  }
}
