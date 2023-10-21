import { ChangeDetectionStrategy, Component } from '@angular/core';

interface IMenuItem {
  label: string;
  route: string;
  isEnabled: boolean;
}

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMenuComponent {
  public readonly menuItems: ReadonlyArray<IMenuItem> = [
    {
      label: 'Home',
      route: '/',
      isEnabled: true,
    },
    {
      label: 'Products',
      route: 'products',
      isEnabled: true,
    },
    {
      label: 'Blog',
      route: 'blog',
      isEnabled: false,
    },
    {
      label: 'About Us',
      route: 'about-us',
      isEnabled: true,
    },
  ];
}
