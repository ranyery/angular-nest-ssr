import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(private readonly _seoService: SeoService) {}

  ngOnInit(): void {
    this._seoService.setTitle('Página Produtos');
    this._seoService.setDescription('Descrição sobre a página produtos...');
  }
}
