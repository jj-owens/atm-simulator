import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './not-found/not-found.module';
import { BankerModule } from './banker/banker.module';
import { RestockModule } from './restock/restock.module';
import { WithdrawModule } from './withdraw/withdraw.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BankerModule,
    RestockModule,
    WithdrawModule,
    LoginModule,
    AppRoutingModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
