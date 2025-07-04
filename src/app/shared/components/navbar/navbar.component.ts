import { ChangeDetectionStrategy, Component } from "@angular/core";

export interface INavbarItem {
  icon: string;
  title: string;
}

const mockNavbarItems: INavbarItem[] = [
  {
    icon: "catalog",
    title: "Каталог",
  },
  {
    icon: "orders",
    title: "Заказы",
  },
  {
    icon: "news",
    title: "Новости",
  },
  {
    icon: "cart",
    title: "Корзина",
  },
  {
    icon: "profile",
    title: "Профиль",
  },
];

@Component({
  selector: "app-navbar",
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public navbarItems = mockNavbarItems;
}
