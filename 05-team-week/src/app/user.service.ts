import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  
  loginUser(username: string, password: string) {
    alert('Login Sent.');
  }

  createNewUser(username: string, email: string, password: string, password2: string) {
    alert('New User creation initiated.');
  }
}
