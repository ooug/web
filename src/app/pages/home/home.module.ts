import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { TechnologyStackComponent } from './components/technology-stack/technology-stack.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    UpcomingEventsComponent,
    TechnologyStackComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
