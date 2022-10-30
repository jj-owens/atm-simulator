import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestockRoutingModule } from './restock-routing.module';
import { AddFundsComponent } from './add-funds/add-funds.component';


@NgModule({
  declarations: [
    AddFundsComponent
  ],
  imports: [
    CommonModule,
    RestockRoutingModule
  ],
  exports: [
    AddFundsComponent
  ]
})
export class RestockModule { }
