import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from 'src/app/shared/services/api/hello-world.service';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { TransferStateService } from 'src/app/shared/services/transfer-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public hello?: { message: string };

  constructor(
    private readonly _seoService: SeoService,
    private readonly _platformService: PlatformService,
    private readonly _transferStateService: TransferStateService,
    private readonly _helloWorldService: HelloWorldService
  ) {
    this._seoService.setTitle('Página Home');
    this._seoService.setDescription('Descrição sobre a página home...');
  }

  ngOnInit(): void {
    if (this._platformService.isServer()) {
      console.log('Running on the server');
      this._fetchHello();
    }

    if (this._platformService.isBrowser()) {
      console.log('Running on the browser');
      this.hello = this._transferStateService.getState('hello-world');
      if (!this.hello) this._fetchHello();
    }
  }

  private _fetchHello(): void {
    this._helloWorldService.getHello().subscribe((message) => {
      this.hello = message;
    });
  }
}
