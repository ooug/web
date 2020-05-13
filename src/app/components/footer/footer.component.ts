import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  public formSubmitted = false;
  public subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  subscribe() {
    this.formSubmitted = true;
    if (this.subscribeForm.invalid) {
      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
      return;
    }
    // send to the server
    alert(this.subscribeForm.value.email + ' have subscribed!');
    this.subscribeForm.reset();
    this.formSubmitted = false;
  }

  ngOnInit(): void {}
}
