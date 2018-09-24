import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent {
  private user;

  constructor(public authService: AuthenticationService, private router: Router) {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.router.navigate(['']);
    this.authService.logout();
  }

  statusColor() {
    if (this.user === null) {
      return 'btn btn-danger';
    } else {
      return 'btn btn-success';
    }
  }
}
