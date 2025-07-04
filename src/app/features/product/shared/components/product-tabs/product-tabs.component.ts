import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProduct } from "../../types/product.type";
import { KeyValueComponent } from "@shared/components/key-value/key-value.component";
import { TabsComponent } from "@app/shared/components/tabs/tabs.component";

@Component({
  selector: "app-product-tabs",
  imports: [TabsComponent, KeyValueComponent],
  templateUrl: "./product-tabs.component.html",
  styleUrl: "./product-tabs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTabsComponent {
  @Input({ required: true }) public product!: IProduct;
}
