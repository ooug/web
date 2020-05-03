import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { TechnologyStackComponent } from './components/technology-stack/technology-stack.component';
import { HomeComponent } from './home.component';
import { EventDetailComponent } from './components/upcoming-events/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'event/:eventId',
    component: EventDetailComponent,
  },
];

@NgModule({
  declarations: [
    UpcomingEventsComponent,
    TechnologyStackComponent,
    HomeComponent,
    EventDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
