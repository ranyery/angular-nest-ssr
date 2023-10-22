import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { FetchOrCacheService } from '../fetch-or-cache.service';
import { PlatformService } from '../platform.service';

@Injectable({ providedIn: 'root' })
export class HelloWorldService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _platformService = inject(PlatformService);
  private readonly _fetchOrCacheService = inject(FetchOrCacheService);

  private readonly _baseUrl = this._platformService.isServer()
    ? 'http://localhost:4200/api/hello-world'
    : '/api/hello-world';

  public getHello(): Observable<{ message: string }> {
    return this._fetchOrCacheService.set<{ message: string }>(
      'hello-world',
      this._httpClient.get<{ message: string }>(`${this._baseUrl}`)
    );
  }
}
