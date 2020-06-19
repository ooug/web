import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent, ContactComponent, NewsletterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AboutModule {}
