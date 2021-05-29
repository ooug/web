import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  infoStr: string | null = null;
  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private http: HttpClient) {}

  subscribe(): void {
    // handling errors
    if (this.subscribeForm.invalid) {
      if (this.subscribeForm.controls.email.errors?.required) {
        this.alertUser('Email required!');
      } else {
        this.alertUser('Invalid Email!');
      }
    } else {
      this.alertUser('Subscribing...');
      // sending to the server
      this.http
        .post((environment.api as string) + '/app/newsletter-subscribe', {
          email: this.subscribeForm.value.email,
        })
        .subscribe((response: any) => {
          if (response.data === 'EMAIL_ALREADY_SUBSCRIBED') {
            this.alertUser('Email already subscribed');
          } else if (response.data === 'NEWSLETTER_SUBSCRIBED') {
            this.alertUser('Subscribed!');
          } else {
            this.alertUser('Something went wrong!');
          }
          this.subscribeForm.reset();
        });
    }
  }

  alertUser(str: string): void {
    this.infoStr = str;
    setTimeout(() => {
      this.infoStr = null;
    }, 3000);
  }
}
