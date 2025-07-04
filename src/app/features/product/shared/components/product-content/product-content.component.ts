import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IProduct } from "../../types/product.type";
import { KeyValueComponent } from "../../../../../shared/components/key-value/key-value.component";

@Component({
  selector: "app-product-content",
  imports: [KeyValueComponent],
  templateUrl: "./product-content.component.html",
  styleUrl: "./product-content.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContentComponent {
  @Input({ required: true }) public product!: IProduct;
}
