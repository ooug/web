import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public categories = null;
  public userChoice = [];
  public isCollapsed = true;
  public searchForm = new FormGroup({
    searchBox: new FormControl(''),
  });

  constructor(private blogService: BlogService) {}

  filterCategory(category: string) {
    const i = this.userChoice.indexOf(category);
    if (i === -1) {
      this.userChoice.push(category);
    } else {
      this.userChoice.splice(i, 1);
    }
    this.blogService.filterBlogsByCategory(this.userChoice);
  }

  searchBlog() {
    this.blogService.searchBlog(this.searchForm.value.searchBox);
  }

  ngOnInit(): void {
    this.blogService.getCategoryNotifier().subscribe((categories) => {
      this.categories = categories;
    });
    this.blogService.findCategories();
  }
}
