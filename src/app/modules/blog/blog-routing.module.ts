import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogPage } from './page/blog.page';

const routes: Routes = [{ path: '', component: BlogPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
