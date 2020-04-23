import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToggleSidebar {
  private sidebarClasses = 'toggled';

  toggleSidebar() {
    if (this.sidebarClasses === 'toggled') {
      this.sidebarClasses = '';
    } else {
      this.sidebarClasses = 'toggled';
    }
  }

  getClasses() {
    return this.sidebarClasses;
  }
}
