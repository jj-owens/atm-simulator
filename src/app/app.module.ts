import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { RestockComponent } from './restock/restock.component';
import { BankerComponent } from './banker/banker.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CenterpanelComponent } from './centerpanel/centerpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WithdrawComponent,
    RestockComponent,
    BankerComponent,
    NotfoundComponent,
    CenterpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
