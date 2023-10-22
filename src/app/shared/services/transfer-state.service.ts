import { inject, Injectable, makeStateKey, TransferState } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransferStateService {
  private readonly _transferState = inject(TransferState);

  public saveState<T>(key: string, data: T): void {
    this._transferState.set<T>(makeStateKey(key), data);
  }

  public getState<T>(key: string): T {
    return this._transferState.get<T>(makeStateKey(key), undefined as T);
  }

  public hasState<T>(key: string) {
    return this._transferState.hasKey<T>(makeStateKey(key));
  }
}
