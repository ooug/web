import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { FilterComponent } from './component/filter/filter.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';
import { BlogService } from './blog.service';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopularBlogsComponent } from './component/popular-blogs/popular-blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: ':blogId',
    component: BlogPageComponent,
  },
];

@NgModule({
  declarations: [
    BlogComponent,
    FilterComponent,
    BlogListComponent,
    BlogPageComponent,
    PopularBlogsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [BlogService],
})
export class BlogModule {}
