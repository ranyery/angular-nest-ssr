import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly _meta = inject(Meta);
  private readonly _title = inject(Title);

  public setTitle(title: string): void {
    this._title.setTitle(title);
    this._meta.updateTag({ name: 'title', content: title });
    this._meta.updateTag({ property: 'og:title', content: title });
  }

  public setDescription(description: string): void {
    this._meta.updateTag({ name: 'description', content: description });
    this._meta.updateTag({ property: 'og:description', content: description });
  }

  public setMetaTag(property: string, content: string): void {
    this._meta.updateTag({ property, content });
  }
}
