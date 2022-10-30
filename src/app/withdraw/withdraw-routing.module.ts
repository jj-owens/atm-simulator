import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerWithdrawComponent } from './customer-withdraw/customer-withdraw.component';

const routes: Routes = [{
  path: 'withdraw', component: CustomerWithdrawComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawRoutingModule { }
