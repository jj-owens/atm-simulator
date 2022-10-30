import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';

const routes: Routes = [{
  path: 'banker', component: ManageAccountsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankerRoutingModule { }
