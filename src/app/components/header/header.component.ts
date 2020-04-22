import { HostListener, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private scroll: ViewportScroller,
    private router: Router) {
  }

  public isNavbarCollapsed = true;
  public headerStyles = { 'background-color': '#652e90' };
  private isHomePage = false;

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.isHomePage = val.url === '/' ? true : false;
      }
      if (this.isHomePage) {
        this.headerStyles["background-color"] = 'transparent';
      } else {
        this.headerStyles["background-color"] = '#652e90';
      }
    })
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const yOffset = this.scroll.getScrollPosition()[1]
    if (yOffset > 10 && this.isHomePage) {
      this.headerStyles["background-color"] = '#652e90';
    }
    if (yOffset <= 10 && this.isHomePage) {
      this.headerStyles["background-color"] = 'transparent';
    }
  }
}
