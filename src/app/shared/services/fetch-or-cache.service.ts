import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap } from 'rxjs';

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

    return observable.pipe(
      retry({ count: 2, delay: 200 }),
      catchError((httpError: HttpErrorResponse) => {
        if (this._platformService.isServer()) {
          console.error('🔴 Error during pre-rendering:', stateKey);
        }

        return of(undefined as T);
        // return throwError(() => httpError);
      }),
      tap((response) => {
        this._transferStateService.saveState<T>(stateKey, response);
      })
    );
  }
}
