import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    private authService: AuthService
  ) {}

  public passwordClass = ['input-div'];
  public conPasswordClass = ['input-div'];
  public isLoading = false;

  public resetForm = new FormGroup({
    newPass: new FormControl(''),
    confNewPass: new FormControl(''),
  });

  // when focused on input fields
  focus(input: string) {
    if (input === 'password') {
      this.passwordClass.push('focus');
    }
    if (input === 'con_password') {
      this.conPasswordClass.push('focus');
    }
  }

  // when focused out
  focusout(input: string) {
    if (input === 'password') {
      if (this.resetForm.value.newPass === '') {
        this.passwordClass.pop();
      }
    }
    if (input === 'con_password') {
      if (this.resetForm.value.confNewPass === '') {
        this.conPasswordClass.pop();
      }
    }
  }

  public resetPassword() {
    this.isLoading = true;
    this.authService
      .resetPassword(this.resetForm.value.newPass)
      .subscribe((data: any) => {
        this.isLoading = false;
        if (data.status === false) {
          if (data.message === 'EMAIL_NOT_REGISTERED') {
            alert('Email not registered');
            this.router.navigate(['/auth/login']);
          }
        } else {
          alert('Password successfully changed!');
          this.router.navigate(['/auth/login']);
        }
      });
  }

  updateMetaTags() {
    this.titleService.setTitle('Reset Password | OOUG');
    this.metaService.updateTag({
      name: 'description',
      content: 'Reset Password',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/auth/reset-password',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Reset Password | OOUG',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Reset Password',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
    if (!this.authService.isOtpVerified()) {
      this.router.navigate(['/auth/forgot-password']);
    }
  }
}
