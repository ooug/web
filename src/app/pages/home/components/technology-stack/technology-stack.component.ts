import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.scss'],
})
export class TechnologyStackComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public isLoading = false;
  public articles = null;

  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('./assets/api/blogs.json').subscribe((blogs) => {
      // only 6 recent blogs on home page
      this.articles = JSON.parse(JSON.stringify(blogs)).slice(0, 6);
      this.isLoading = false;
    });
  }
}
