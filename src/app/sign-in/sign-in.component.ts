import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  invalidUser: boolean;
  user: User;

  constructor() { }

  login(userName: string) {
    if (userName === '') {
      this.invalidUser = true;
    } else {
      this.user = new User(userName);
      this.invalidUser = false;
    }
  }
}
