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
  emailValid: boolean = null;
  passwordFirstValid: boolean = null;
  passwordSecondValid: boolean = null;

  constructor(private router: Router, private userService: UserService) { }

  submitNewUser(email, passwordFirst, passwordSecond) {
    this.validateInput(email, passwordFirst, passwordSecond);
    if (this.emailValid && this.passwordFirstValid && this.passwordSecondValid) {
      this.sendNewUserRequest(email, passwordFirst);
    }
  }

  validateInput(email: string, passwordFirst: string, passwordSecond: string) {
    this.emailValid = null;
    this.passwordFirstValid = null;
    this.passwordSecondValid = null;

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

  sendNewUserRequest(email, password) {
    this.userService.createNewUser(email, password);

  }
}
