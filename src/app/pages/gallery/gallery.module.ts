import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
];

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgbCarouselModule],
})
export class GalleryModule {}
