import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public infoStr: string = null;
  public subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  public subscribe(): void {
    // handling errors
    if (this.subscribeForm.invalid) {
      if (this.subscribeForm.controls.email.errors.required) {
        this.AlertUser('Email required!');
      } else {
        this.AlertUser('Invalid Email!');
      }
    } else {
      this.AlertUser('Subscribing...');
      // sending to the server
      this.http
        .post((environment.API as string) + '/app/newsletter-subscribe', {
          email: this.subscribeForm.value.email,
        })
        .subscribe((response: any) => {
          if (response.data === 'EMAIL_ALREADY_SUBSCRIBED') {
            this.AlertUser('Email already subscribed');
          } else if (response.data === 'NEWSLETTER_SUBSCRIBED') {
            this.AlertUser('Subscribed!');
          } else {
            this.AlertUser('Something went wrong!');
          }
          this.subscribeForm.reset();
        });
    }
  }

  private AlertUser(str: string): void {
    this.infoStr = str;
    setTimeout(() => {
      this.infoStr = null;
    }, 3000);
  }

  ngOnInit(): void {}
}
