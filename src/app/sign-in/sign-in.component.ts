import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  @Output() signIn = new EventEmitter();
  invalidUser: boolean;
  user: User;

  constructor() { }

  login(username: string) {
    if (username === '') {
      this.invalidUser = true;
    } else {
      this.user = new User(username);
      this.invalidUser = false;
      this.signIn.emit(this.user);
    }
  }
}
