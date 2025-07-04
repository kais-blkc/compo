import { KeyValueComponent } from "@shared/components/key-value/key-value.component";
import { BtnBuyComponent } from "@shared/components/btn-buy/btn-buy.component";
import { NumberWithSpacesPipe } from "@shared/pipes/number-with-spaces.pipe";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProduct } from "../../types/product.type";

@Component({
  selector: "app-product-order",
  imports: [NumberWithSpacesPipe, KeyValueComponent, BtnBuyComponent],
  templateUrl: "./product-order.component.html",
  styleUrl: "./product-order.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOrderComponent {
  @Input({ required: true }) public product!: IProduct;
}
