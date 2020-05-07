import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public upcomingEvents = null;
  public isLoading = true;

  ngOnInit(): void {
    // getting data from json file
    this.isLoading = true;
    this.http.get('./assets/api/upcomingEvent.json').subscribe((events) => {
      this.upcomingEvents = events;
      this.isLoading = false;
    });
  }
}
