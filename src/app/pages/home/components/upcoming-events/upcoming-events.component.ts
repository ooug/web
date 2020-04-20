import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  constructor() { }

  public upcoming_events = [
    {
      img_link: '../../../../../assets/imgs/gray.jpg',
      title: 'Upcoming Event 1',
      description: 'Some data about the event. Not more than 2 lines.',
      link: '#'
    },
    {
      img_link: '../../../../../assets/imgs/gray.jpg',
      title: 'Upcoming Event 2',
      description: 'Some data about the event. Not more than 2 lines.',
      link: '#'
    }, {
      img_link: '../../../../../assets/imgs/gray.jpg',
      title: 'Upcoming Event 3',
      description: 'Some data about the event. Not more than 2 lines.',
      link: '#'
    }
  ]

  ngOnInit(): void { }
}
