import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private authService: AuthService,
    private router: Router
  ) {}

  public usernameClass = ['input-div']; // classes used for username field

  public resetForm = new FormGroup({
    email: new FormControl(''),
  });

  public btnText = 'Proceed';

  // when focused on input fields
  focus(input: string) {
    if (input === 'username') {
      this.usernameClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'username') {
      if (this.resetForm.value.email === '') {
        this.usernameClass.pop();
      }
    }
  }

  // login
  sendOTP() {
    if (this.resetForm.invalid) {
      return;
    }
    this.btnText = 'Sending OTP';
    this.authService
      .sendOTP(this.resetForm.value.email)
      .subscribe((data: any) => {
        if (data.status === false) {
          if (data.message === 'EMAIL_NOT_REGISTERED') {
            this.btnText = 'Email not registered.';
          } else {
            this.btnText = 'Something went wrong!';
          }
        } else {
          this.authService.setOtpDetails(this.resetForm.value.email, data.otp);
          this.btnText = 'OTP Sent!';
          this.router.navigate(['/auth/otp']);
        }
      });
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
