import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { BankerComponent } from './banker/banker.component';
import { RestockComponent } from './restock/restock.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'banker', component: BankerComponent },
  { path: 'restock', component: RestockComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
