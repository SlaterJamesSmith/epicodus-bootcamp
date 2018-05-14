import { Component } from '@angular/core';
import { User } from './models/user.model';
import { YouTubeApiService } from './youtube-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YouTubeApiService]
})

export class AppComponent {
  user: User = null;
  tabTarget: string = null;
  preventClickOut: boolean = false;
  signInToggle: boolean = false;
  clicker: string;
  effect: string;

  constructor(private youTubeApiService: YouTubeApiService) { }

  signIn() {
    if (this.signInToggle === false) {
      this.signInToggle = true;
    } else {
      this.signInToggle = false;
    }
  }

  login(user) {
    this.user = user;
    this.signInToggle = false;
  }

  logout() {
    this.user = null;
    this.tabTarget = null;
  }

  activateBtn(button: string) {
    this.clicker = button;
    this.effect = 'circle activate';
  }

  deactivateBtn() {
    setTimeout(() => {
      this.effect = 'circle deactivate';
    }, 150);
  }

  checkClicker(button: string) {
    if (button === this.clicker) {
      return this.effect;
    } else {
      return 'circle';
    }
  }

  tabSelect(selectedTab) {
    if (this.tabTarget === selectedTab) {
      this.tabTarget = null;
    } else {
      this.tabTarget = selectedTab;
    }
  }

  tabFocus(tab) {
    if (this.tabTarget === tab) {
      return 'nav-panel display-flex';
    } else {
      return 'nav-panel display-none';
    }
  }

  sideNavFocus(tab) {
    if (this.tabTarget === tab) {
      return 'display';
    } else {
      return 'display-none';
    }
  }

  protectClick() {
    this.preventClickOut = true;
  }

  clickOut() {
    if (this.preventClickOut === false) {
      this.tabTarget = null;
    }
    this.preventClickOut = false;
  }

  closeMenu() {
    this.tabTarget = null;
  }
}
