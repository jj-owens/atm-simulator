import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFundsComponent } from './add-funds/add-funds.component';

const routes: Routes = [{
  path: 'restock', component: AddFundsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestockRoutingModule { }
