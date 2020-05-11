import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

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

  updateMetaTags() {
    this.titleService.setTitle('Forgot Password | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'Forgot Password',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth/forgot-password',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Forgot Password | OOUG',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Forgot Password',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }
}
