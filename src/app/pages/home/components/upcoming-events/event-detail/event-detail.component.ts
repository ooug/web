import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  event: any = null;
  flags = {
    isLoading: false,
    notFound: false,
  };
  infoText = '';
  registerForm = new FormGroup({
    userName: new FormControl(''),
    roll: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.flags.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('eventId')) {
        const eventId = paramMap.get('eventId');
        // fetching from api
        this.http
          .get(
            (environment.api as string) + '/upcoming-event/get-one/' + eventId
          )
          .subscribe((data: any) => {
            // searching for particular event
            this.event = data.data;
            // if event not found
            if (!this.event) {
              this.flags.notFound = true;
            } else {
              this.updateMetaTags();
            }
            this.flags.isLoading = false;
          });
      }
    });
  }

  register() {
    this.infoText = 'Registering...';
    this.http
      .post((environment.api as string) + '/upcoming-event/register', {
        id: this.event._id,
        name: this.registerForm.value.userName,
        roll: this.registerForm.value.roll.toUpperCase(),
        email: this.registerForm.value.email,
        mobile: this.registerForm.value.mobile,
      })
      .subscribe((data: any) => {
        if (data.data === 'EMAIL_REGISTERED') {
          this.infoText = 'Email already registered!';
        } else if (data.data === 'REGISTERED_FOR_EVENT') {
          this.infoText = 'Registered successfully!';
          this.registerForm.reset();
        } else if (data.data === 'EVENT_NOT_FOUND') {
          this.infoText = 'Event not found';
        } else {
          this.infoText = 'Something went wrong';
        }
      });
  }

  updateMetaTags() {
    this.titleService.setTitle(this.event.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.event.shortDescription,
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/event/' + this.event.id,
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: this.event.title,
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.event.shortDescription,
    });
  }
}
