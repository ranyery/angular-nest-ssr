import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMenuModule } from './shared/components/navbar-menu/navbar-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
