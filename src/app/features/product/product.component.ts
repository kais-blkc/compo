import { ProductContentComponent } from "./shared/components/product-content/product-content.component";
import { ProductOrderComponent } from "./shared/components/product-order/product-order.component";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { IProduct } from "./shared/types/product.type";
import { ProductTabsComponent } from "./shared/components/product-tabs/product-tabs.component";

const mockProduct: IProduct = {
  img: ["img/product-1.png"],
  logo: "img/logo.png",
  name: "Ключ комбинированный 27мм (Chrome vanadium) на держателе сатинированный 1/10 (ER-31027) ЭВРИКА",
  brand: "МОТОРАЕТАЛЬ",
  article: "ФТ-305.174",
  supplier_code: "00000030692",
  price: 15341.0,
  currency: "₽",
  points: 20.79,
  availability: [
    {
      city: "Москва",
      quantity: 2,
      delivery_date: "22.04.2025",
    },
    {
      city: "Ростов",
      quantity: 2,
      delivery_date: "29.04.2025",
    },
  ],
  description: [
    {
      key: "Тип",
      value: "грузовые автомобили, автобусы, сельхозтехника",
    },
    {
      key: "Применяемость",
      value: "KAMA3, ЛИА3, CASE с дв. CUMMINS ISBe/ ISDe",
    },
    {
      key: "Бренды",
      value: "KAMA3, ЛИА3, CASE",
    },
    {
      key: "Кросс-коды",
      value: "FC6206 WK950/3 110-16-008 6127 FF185M 1457434180 KC28 KF3041",
    },
    {
      key: "Состав комплекта",
      value: "Фильтр очистки топлива: 1 шт.",
    },
    {
      key: "Модель двигателя",
      value: "Cummins ISD 6.7, Cummins ISB 6.7",
    },
    {
      key: "Бренд двигателя",
      value: "Cummins Inc.",
    },
    {
      key: "Дополнительная информация",
      value: "--",
    },
  ],
};

@Component({
  selector: "app-product",
  imports: [
    ProductContentComponent,
    ProductOrderComponent,
    ProductTabsComponent,
  ],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  public product = mockProduct;
}
