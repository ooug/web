import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private http: HttpClient
  ) {}

  public usernameClass = ['input-div']; // classes used for username field
  public passwordClass = ['input-div']; // classes used for password field

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
      if (this.loginForm.value.password === '') {
        this.passwordClass.pop();
      }
    }
    if (input === 'username') {
      if (this.loginForm.value.email === '') {
        this.usernameClass.pop();
      }
    }
  }

  // login
  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.http.get('./assets/api/user.json').subscribe((users) => {
      const user = JSON.parse(JSON.stringify(users)).find((u) => {
        return u.email === this.loginForm.value.email;
      });
      if (user) {
        // user found
        if (user.password === this.loginForm.value.password) {
          // login successfully
          alert(user.name + ' logged in !');
        } else {
          // incorrect password
          alert('Incorrect Password!');
        }
      } else {
        // email mot valid
        alert('Invalid Email!');
      }
      this.loginForm.reset();
    });
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
