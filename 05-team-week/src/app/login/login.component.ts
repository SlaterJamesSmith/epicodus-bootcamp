import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {

  constructor(private router: Router, private userService: UserService) { }

  submitLogin(email, password) {
    this.userService.signIn(email, password);
  }
}
