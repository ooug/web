import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor() {}
  public workshop = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  public techbhukkads = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  public farewell = [
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 1',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 2',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 3',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 4',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 5',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
    {
      Image: { host: '', path: './assets/images/gray.jpg' },
      name: 'Activity 6',
      place: 'Some Place',
      date: '24/04/2020',
      description: 'Some Description',
    },
  ];

  // slider------------------------

  images = [
    './assets/images/ooug.png',
    './assets/images/1.jpg',
    './assets/images/2.jpg',
    './assets/images/3.jpg',
    './assets/images/4.jpg',
    './assets/images/bg.jpg',
    './assets/images/e.jpg',
  ];
  slidertitle = [
    'ooug logo',
    'workshop on python',
    'web develop workshop',
    'selebration party',
    'Motivational speach is delivered by the president',
    'Accept the challenges so that you can feel the exhilaration of victory.',
    'Failure will never overtake me if my determination to succeed is strong enough.',
  ];

  paused = false;
  pauseOnHover = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  ngOnInit(): void {}
}
