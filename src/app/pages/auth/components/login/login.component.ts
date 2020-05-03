import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

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

  updateMetaTags() {
    this.titleService.setTitle('Login | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'Login To OOUG',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth/login',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Login | OOUG',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Login To OOUG',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }
}
