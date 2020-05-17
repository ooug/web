import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogModule } from './blog.module';
import { Subject, Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: BlogModule,
})
export class BlogService {
  private blogNotifier: any = new Subject<any>();
  private categoryNotifier: any = new Subject<any>();
  private popularBlogNotifier: any = new Subject<any>();
  private allBlogs = [];
  private allCategories = [];

  constructor(private http: HttpClient) {
    this.http.get('./assets/api/blogs.json').subscribe((blogs: any[]) => {
      this.allBlogs = blogs;
      this.blogNotifier.next(this.allBlogs);
      this.findCategories();
      this.getPopularBlogs();
    });
  }

  public findCategories() {
    JSON.parse(JSON.stringify(this.allBlogs)).forEach((b: any) => {
      if (this.allCategories.indexOf(b.category) === -1) {
        this.allCategories.push(b.category);
      }
    });
    this.categoryNotifier.next(this.allCategories);
  }

  public filterBlogsByCategory(categories: string[]) {
    if (categories.length === 0) {
      return this.blogNotifier.next(this.allBlogs);
    }
    const res = this.allBlogs.filter((b) => {
      if (categories.indexOf(b.category) === -1) {
        return false;
      }
      return true;
    });
    return this.blogNotifier.next(res);
  }

  public searchBlog(str: string) {
    const result = this.allBlogs.filter((b) => {
      if (b.title.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
        return true;
      }
      if (b.Author.name.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
        return true;
      }
      if (b.category.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
        return true;
      }
      if (b.paragraph.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    });
    this.blogNotifier.next(result);
  }

  public getPopularBlogs() {
    this.popularBlogNotifier.next(this.allBlogs.slice(0, 5));
  }

  public fetchBlogs() {
    return this.blogNotifier.next(this.allBlogs);
  }

  public getBlogNotifier(): Observable<any> {
    return this.blogNotifier.asObservable();
  }

  public getCategoryNotifier(): Observable<any> {
    return this.categoryNotifier.asObservable();
  }

  public getPopularBlogNotifier(): Observable<any> {
    return this.popularBlogNotifier.asObservable();
  }
}
