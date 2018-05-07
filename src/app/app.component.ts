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
    this.effect = 'circle activate';
  }

  deactivateBtn(button: string) {
    setTimeout(() => {
      this.effect = 'circle deactivate';
    },100);
  }

  checkClicker(button: string) {
    if (button === this.clicker) {
      return this.effect;
    } else {
      return 'circle';
    }
  }
}
