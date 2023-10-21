import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPage } from './page/about-us.page';

@NgModule({
  declarations: [AboutUsPage],
  imports: [CommonModule, AboutUsRoutingModule],
})
export class AboutUsModule {}
