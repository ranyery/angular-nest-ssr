import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  constructor(private readonly _seoService: SeoService) {}

  ngOnInit(): void {
    this._seoService.setTitle('Página Sobre nós');
    this._seoService.setDescription('Descrição sobre a página sobre nós...');
  }
}
