import { Component, OnInit } from '@angular/core';
import { ToggleSidebar } from './toggleSidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public sidebarService: ToggleSidebar) {}

  ngOnInit(): void {}
}
