import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing.module';
import { CustomerWithdrawComponent } from './customer-withdraw/customer-withdraw.component';


@NgModule({
  declarations: [
    CustomerWithdrawComponent
  ],
  imports: [
    CommonModule,
    WithdrawRoutingModule
  ],
  exports: [
    CustomerWithdrawComponent
  ]
})
export class WithdrawModule { }
