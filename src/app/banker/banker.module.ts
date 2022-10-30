import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankerRoutingModule } from './banker-routing.module';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';


@NgModule({
  declarations: [
    ManageAccountsComponent
  ],
  imports: [
    CommonModule,
    BankerRoutingModule
  ],
  exports: [
    ManageAccountsComponent
  ]
})
export class BankerModule { }
