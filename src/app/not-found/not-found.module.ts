import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NothingHereComponent } from './nothing-here/nothing-here.component';


@NgModule({
  declarations: [
    NothingHereComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [
    NothingHereComponent
  ]
})
export class NotFoundModule { }
