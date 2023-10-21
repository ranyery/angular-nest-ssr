import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformService {
  private readonly _platformId = inject(PLATFORM_ID);

  public isBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }

  public isServer(): boolean {
    return isPlatformServer(this._platformId);
  }
}
