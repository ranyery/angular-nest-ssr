import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  Optional,
} from '@angular/core';
import { RESPONSE } from '@nestjs/ng-universal/dist/tokens';
import { Response } from 'express';
import { StatusCodes as HTTP_STATUS_CODES } from 'http-status-codes';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage implements OnInit {
  constructor(
    private readonly _seoService: SeoService,
    private readonly _platformService: PlatformService,
    @Optional() @Inject(RESPONSE) private readonly _response: Response
  ) {
    this._seoService.setTitle('Página não encontrada!');
    this._seoService.setDescription(
      'Descrição sobre a página não encontrada...'
    );
  }

  ngOnInit(): void {
    if (this._platformService.isServer()) {
      console.log('Running on the server');
      this._response.status(HTTP_STATUS_CODES.NOT_FOUND);
    }

    if (this._platformService.isBrowser()) {
      console.log('Running on the browser');
    }
  }
}
