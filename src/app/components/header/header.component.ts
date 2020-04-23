import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  private isHomePage = false;
  public isSideBarCollapse: boolean;
  public isTransparent = true;

  constructor(
    private scroll: ViewportScroller,
    private router: Router,
    public helperService: HelperService
  ) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const yOffset = this.scroll.getScrollPosition()[1];
    if (yOffset > 10 && this.isHomePage) {
      this.isTransparent = false;
    }

    if (yOffset <= 10 && this.isHomePage) {
      this.isTransparent = true;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.isHomePage = val.url === '/';
      }
      this.isTransparent = this.isTransparent;
    });

    this.subs.add(
      this.helperService.isSideBarCollapse$.subscribe(($) => {
        this.isSideBarCollapse = $;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
