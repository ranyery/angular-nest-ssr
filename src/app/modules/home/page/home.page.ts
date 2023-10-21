import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _platformService: PlatformService
  ) {
    this._seoService.setTitle('Página Home');
    this._seoService.setDescription('Descrição sobre a página home...');
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
