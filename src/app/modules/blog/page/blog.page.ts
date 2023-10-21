import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  constructor(private readonly _seoService: SeoService) {}

  ngOnInit(): void {
    this._seoService.setTitle('Página Blog');
    this._seoService.setDescription('Descrição sobre a página blog...');
  }
}
