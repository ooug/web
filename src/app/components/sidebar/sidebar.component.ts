import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/services/helper/helper.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  subs = new Subscription();
  isSideBarCollapse = true;
  constructor(public helperService: HelperService) {}

  ngOnInit(): void {
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
