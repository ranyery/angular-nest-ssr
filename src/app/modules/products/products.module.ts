import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsPage } from './page/products.page';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsPage],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
