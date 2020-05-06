import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  public blogs = null;
  private blogNotifier = null;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogNotifier = this.blogService.getNotifier().subscribe((blogs) => {
      this.blogs = blogs;
    });
    this.blogService.fetchBlogs();
  }

  ngOnDestroy() {
    this.blogNotifier.unsubscribe();
  }
}
