import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { FilterComponent } from './component/filter/filter.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
];

@NgModule({
  declarations: [BlogComponent, FilterComponent, BlogListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogModule {}
