import { inject, Injectable } from '@angular/core';
import { Observable, of, retry, tap } from 'rxjs';

import { TransferStateService } from './transfer-state.service';

@Injectable({ providedIn: 'root' })
export class FetchOrCacheService {
  private readonly _transferStateService = inject(TransferStateService);

  public set<T>(stateKey: string, observable: Observable<T>): Observable<T> {
    const hasState = this._transferStateService.hasState<T>(stateKey);

    if (hasState) {
      return of(this._transferStateService.getState<T>(stateKey));
    }

    return observable.pipe(
      tap((response) => {
        this._transferStateService.saveState<T>(stateKey, response);
      }),
      retry({ count: 2, delay: 200 })
    );
  }
}
