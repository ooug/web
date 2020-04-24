import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  public usernameClass = ['input-div']; // classes used for username field
  public passwordClass = ['input-div']; // classes used for password field
  public user = {
    username: '',
    password: '',
  };

  // when focused on input fields
  focus(input: string) {
    if (input === 'password') {
      this.passwordClass.push('focus');
    }
    if (input === 'username') {
      this.usernameClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'password') {
      if (this.user.password === '') {
        this.passwordClass.pop();
      }
    }
    if (input === 'username') {
      if (this.user.username === '') {
        this.usernameClass.pop();
      }
    }
  }

  // login
  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
    console.log(loginForm);
  }

  ngOnInit(): void {}
}
//style of login page
const inputs = document.querySelectorAll('.input');

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', addcl);
  input.addEventListener('blur', remcl);
});
