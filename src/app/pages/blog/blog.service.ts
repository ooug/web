import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModule } from './blog.module';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: BlogModule,
})
export class BlogService {
  private blogNotifier: any = new Subject<any>();
  private allBlogs = null;

  constructor(private http: HttpClient) {
    console.log('Blog Service activated');
    this.http.get('./assets/api/blogs.json').subscribe((blogs) => {
      this.allBlogs = blogs;
      this.blogNotifier.next(this.allBlogs);
    });
  }

  fetchBlogs() {
    return this.blogNotifier.next(this.allBlogs);
  }

  getNotifier(): Observable<any> {
    return this.blogNotifier.asObservable();
  }
}
