import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;
  currentUserId: string = null;
  errorMessage: string = null;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.errorMessage = null;
      this.currentUserId = firebase.auth().currentUser.uid;
    }).catch(error => {
      this.errorMessage = error.message;
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  createNewUser(name: string, email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
      this.errorMessage = null;
      this.currentUserId = firebase.auth().currentUser.uid;
    }).then(() => {
      firebase.database().ref('users/' + this.currentUserId).set({
        name: name,
        email: email
      });
    }).catch(error => {
      this.errorMessage = error.message;
    });
  }
}
