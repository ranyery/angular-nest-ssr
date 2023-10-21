import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private readonly _seoService: SeoService) {}

  ngOnInit(): void {
    this._seoService.setTitle('Página Home');
    this._seoService.setDescription('Descrição sobre a página home...');
  }
}
