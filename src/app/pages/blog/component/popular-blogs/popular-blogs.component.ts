import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-popular-blogs',
  templateUrl: './popular-blogs.component.html',
  styleUrls: ['./popular-blogs.component.scss'],
})
export class PopularBlogsComponent implements OnInit, OnDestroy {
  public popularBlogs = null;
  private blogNotifier;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogNotifier = this.blogService
      .getPopularBlogNotifier()
      .subscribe((blogs) => {
        this.popularBlogs = blogs;
      });
    this.blogService.getPopularBlogs();
  }

  ngOnDestroy(): void {
    this.blogNotifier.unsubscribe();
  }
}
