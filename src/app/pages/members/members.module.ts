import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';

@NgModule({
  declarations: [MembersComponent],
  imports: [NgbDropdownModule, CommonModule, MembersRoutingModule, NgbModule],
})
export class MembersModule {}
