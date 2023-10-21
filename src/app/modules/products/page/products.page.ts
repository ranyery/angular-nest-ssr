import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _platformService: PlatformService
  ) {
    this._seoService.setTitle('Página Produtos');
    this._seoService.setDescription('Descrição sobre a página produtos...');
  }

  ngOnInit(): void {
    if (this._platformService.isServer()) {
      console.log('Running on the server');
    }

    if (this._platformService.isBrowser()) {
      console.log('Running on the browser');
    }
  }
}
