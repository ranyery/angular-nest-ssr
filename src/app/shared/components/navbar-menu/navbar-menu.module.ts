import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarMenuComponent } from './navbar-menu.component';

@NgModule({
  declarations: [NavbarMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarMenuComponent],
})
export class NavbarMenuModule {}
