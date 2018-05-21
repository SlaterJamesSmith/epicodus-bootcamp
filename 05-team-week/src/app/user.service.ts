import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { USER } from './tool-data';

@Injectable()
export class UserService {

  getUser() {
    return USER;
  }

  loginUser(username: string, password: string) {
    alert('Login Sent.');
  }

  createNewUser(username: string, email: string, password: string, password2: string) {
    alert('New User creation initiated.');
  }
}
