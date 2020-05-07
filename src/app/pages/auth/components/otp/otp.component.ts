import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
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
    this.titleService.setTitle('OTP | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'OTP',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth/otp',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'OTP | OOUG',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'OTP',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }
}
