import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;
  errorMessage: string = null;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  loginUser(username: string, password: string) {
    alert('Login Sent.');

  }

  createNewUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
        this.errorMessage = error.message;
    });
    if (this.user) {
      this.errorMessage = null;
    }
  }
}
