import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
