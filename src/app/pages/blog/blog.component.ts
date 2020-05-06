import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateMetaTags() {
    this.titleService.setTitle('Blogs | Odisha Oracle Users Group');
    this.metaService.updateTag({
      name: 'description',
      content: 'Blogs | Odisha Oracle Users Group',
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://odishaoug.in/blog',
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Blogs | Odisha Oracle Users Group',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Blogs | Odisha Oracle Users Group',
    });
  }

  ngOnInit(): void {
    this.updateMetaTags();
  }
}
