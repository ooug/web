import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor() {}

  public upcomingActivities = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];
  public previousActivities = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Name 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  ngOnInit(): void {}
}
