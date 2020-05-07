import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  subscribeForm = new FormGroup({
    email: new FormControl(''),
  });

  subscribe() {
    if (this.subscribeForm.invalid) {
      return;
    }
    // send to the server
    alert(this.subscribeForm.value.email + ' have subscribed!');
    this.subscribeForm.reset();
  }

  ngOnInit(): void {}
}
