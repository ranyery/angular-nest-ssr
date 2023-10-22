import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

import { PlatformService } from './platform.service';
import { TransferStateService } from './transfer-state.service';

@Injectable({ providedIn: 'root' })
export class FetchOrCacheService {
  private readonly _platformService = inject(PlatformService);
  private readonly _transferStateService = inject(TransferStateService);

  public set<T>(stateKey: string, observable: Observable<T>): Observable<T> {
    const hasState = this._transferStateService.hasState<T>(stateKey);

    if (hasState) {
      return of(this._transferStateService.getState<T>(stateKey));
    }

    if (this._platformService.isServer()) {
      return observable.pipe(
        tap((response) => {
          this._transferStateService.saveState<T>(stateKey, response);
        })
      );
    }

    return observable;
  }
}
