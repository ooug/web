import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor() {}

  public usernameClass = ['input-div']; // classes used for username field
  public user = {
    username: '',
  };

  // when focused on input fields
  focus(input: string) {
    if (input === 'username') {
      this.usernameClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'username') {
      if (this.user.username === '') {
        this.usernameClass.pop();
      }
    }
  }

  // login
  sendOTP(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    console.log(loginForm);
  }

  ngOnInit(): void {}
}
