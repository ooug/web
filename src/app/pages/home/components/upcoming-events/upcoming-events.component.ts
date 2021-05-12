import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent implements OnInit {
  upcomingEvents: any = null;
  isLoading = true;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // getting data from json file
    this.isLoading = true;
    this.http
      .get((environment.api as string) + '/upcoming-event/get-all')
      .subscribe((events: any) => {
        this.upcomingEvents = events.data;
        this.isLoading = false;
      });
  }
}
