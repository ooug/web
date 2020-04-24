import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';

@NgModule({
  declarations: [MembersComponent],
  imports: [NgbModule, CommonModule, MembersRoutingModule],
})
export class MembersModule {}
