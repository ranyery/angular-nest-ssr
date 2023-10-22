import { inject, Injectable, makeStateKey, TransferState } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransferStateService {
  private readonly _transferState = inject(TransferState);

  public saveState<T>(key: string, data: any): void {
    this._transferState.set<T>(makeStateKey(key), data);
  }

  public getState<T>(key: string, defaultValue: any = []): T {
    const state = this._transferState.get<T>(makeStateKey(key), defaultValue);
    this._transferState.remove(makeStateKey(key));
    return state;
  }

  public hasState<T>(key: string) {
    return this._transferState.hasKey<T>(makeStateKey(key));
  }
}
