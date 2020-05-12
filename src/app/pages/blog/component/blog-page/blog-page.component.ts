import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {}

  public blog = null;
  public flags = {
    isLoading: false,
    notFound: false,
  };

  updateMetaTags() {
    this.titleService.setTitle(this.blog.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.blog.paragraph,
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/blog/' + this.blog.id,
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: this.blog.title,
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.blog.paragraph,
    });
  }

  ngOnInit(): void {
    this.flags.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('blogId')) {
        const blogId = Number(paramMap.get('blogId'));
        // fetching from api
        this.http.get('./assets/api/blogs.json').subscribe((blogs) => {
          // searching for particular event
          this.blog = JSON.parse(JSON.stringify(blogs)).find((e: any) => {
            return e.id === blogId;
          });
          // if event not found
          if (!this.blog) {
            this.flags.notFound = true;
          } else {
            this.updateMetaTags();
          }
          this.flags.isLoading = false;
        });
      }
    });
  }
}
