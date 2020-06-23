import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesService } from './activities.service';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { from } from 'rxjs';
import { ImageSlider, Workshop, Techbhukkads, Farewell } from './activities';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ActivitiesComponent implements OnInit {
  constructor(
    config: NgbCarouselConfig,
    private activitiesService: ActivitiesService
  ) {
    config.interval = 10000;
  }
  active = 'workshop';
  tap = 1;

  public images: ImageSlider;
  public workshop: Workshop;
  public techbhukkads: Techbhukkads;
  public farewell: Farewell;

  public errorSlider: any;
  public errorWorkshop: any;
  public errorTechbhukkads: any;
  public errorFarewell: any;

  paused = false;
  pauseOnHover = false;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  buttons(but: number) {
    this.tap = but;
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  ngOnInit() {
    this.activitiesService.getSlide().subscribe(
      (data) => (this.images = data),
      (error) => (this.errorSlider = error)
    );
    this.activitiesService.getWorkshop().subscribe(
      (data) => (this.workshop = data),
      (error) => (this.errorWorkshop = error)
    );
    this.activitiesService.getTechbhukkads().subscribe(
      (data) => (this.techbhukkads = data),
      (error) => (this.errorTechbhukkads = error)
    );
    this.activitiesService.getFarewell().subscribe(
      (data) => (this.farewell = data),
      (error) => (this.errorFarewell = error)
    );
  }

  public activateTab(tab: string) {
    this.active = tab;
  }
}
