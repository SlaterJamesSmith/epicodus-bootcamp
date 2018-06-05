import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {
  nameValid: boolean = null;
  emailValid: boolean = null;
  passwordFirstValid: boolean = null;
  passwordSecondValid: boolean = null;

  constructor(private router: Router, private userService: UserService) { }

  submitNewUser(name, email, passwordFirst, passwordSecond) {
    this.validateInput(name, email, passwordFirst, passwordSecond);
    if (this.nameValid && this.emailValid && this.passwordFirstValid && this.passwordSecondValid) {
      this.sendNewUserRequest(name, email, passwordFirst);
    }
  }

  validateInput(name: string, email: string, passwordFirst: string, passwordSecond: string) {
    this.nameValid = null;
    this.emailValid = null;
    this.passwordFirstValid = null;
    this.passwordSecondValid = null;

    if (name.match(/[^\s]/g) !== null && name !== '') {
      this.nameValid = true;
    } else {
      this.nameValid = false;
    }

    if (!email.includes(' ') && email !== '') {
      this.emailValid = true;
    } else {
      this.emailValid = false;
    }

    if (!passwordFirst.includes(' ') && passwordFirst !== '') {
      this.passwordFirstValid = true;
    } else {
      this.passwordFirstValid = false;
    }

    if (passwordSecond === passwordFirst) {
      this.passwordSecondValid = true;
    } else {
      this.passwordSecondValid = false;
    }
  }

  sendNewUserRequest(name, email, password) {
    this.userService.createNewUser(name, email, password);
  }
}
