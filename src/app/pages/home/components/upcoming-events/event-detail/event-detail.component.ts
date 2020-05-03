import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  public event = null;
  public flags = {
    isLoading: false,
    notFound: false,
  };

  registerForm = new FormGroup({
    userName: new FormControl(''),
    roll: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
  });

  register() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
    alert('Registered');
  }

  ngOnInit(): void {
    this.flags.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('eventId')) {
        const eventId = paramMap.get('eventId');
        // fetching from api
        this.http.get('./assets/api/upcomingEvent.json').subscribe((events) => {
          // searching for particular event
          this.event = JSON.parse(JSON.stringify(events)).find((e: any) => {
            return e.id === eventId;
          });
          // if event not found
          if (!this.event) {
            this.flags.notFound = true;
          }
          this.flags.isLoading = false;
        });
      }
    });
  }
}
