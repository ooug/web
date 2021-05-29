import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });
  infoText = '';
  constructor(private http: HttpClient) {}

  contact(): void {
    if (this.contactForm.invalid) {
      return;
    }
    this.infoText = 'Submitting...';
    this.http
      .post(
        (environment.api as string) + '/app/contact-us',
        this.contactForm.value
      )
      .subscribe((data: any) => {
        if (data.data === 'FORM_SUBMITTED') {
          this.infoText =
            'Submitted! Someone from our team will contact you soon.';
          this.contactForm.reset();
        } else {
          this.infoText = 'Something went wrong! Please try again.';
        }
      });
  }
}
