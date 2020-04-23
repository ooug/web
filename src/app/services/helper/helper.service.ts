import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private isSideBarCollapseState = true;
  private isSideBarCollapse = new BehaviorSubject<boolean>(
    this.isSideBarCollapseState
  );
  public readonly isSideBarCollapse$ = this.isSideBarCollapse.asObservable();
  constructor() {}

  public toggleSideBar(): void {
    this.isSideBarCollapseState = !this.isSideBarCollapseState;
    this.isSideBarCollapse.next(this.isSideBarCollapseState);
  }
}
