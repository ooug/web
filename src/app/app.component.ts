import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from './services/helper/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  public isSideBarCollapse: boolean;
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
