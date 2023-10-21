import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPage } from './page/blog.page';

@NgModule({
  declarations: [BlogPage],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
