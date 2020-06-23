import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private authService: AuthService,
    private router: Router
  ) {}

  public usernameClass = ['input-div']; // classes used for username field
  public user = {
    username: '',
  };

  public otpForm = new FormGroup({
    otp: new FormControl(''),
  });

  // when focused on input fields
  focus(input: string) {
    if (input === 'username') {
      this.usernameClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'username') {
      if (this.otpForm.value.otp === '') {
        this.usernameClass.pop();
      }
    }
  }

  public verifyOtp() {
    if (this.authService.verifyOtp(this.otpForm.value.otp)) {
      this.router.navigate(['/auth/reset-password']);
    } else {
      alert('OTP Incorrect');
    }
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
    if (!this.authService.isOtpSent()) {
      this.router.navigate(['/auth/forgot-password']);
    }
  }
}
