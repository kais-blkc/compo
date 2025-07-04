import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-btn-buy",
  imports: [],
  templateUrl: "./btn-buy.component.html",
  styleUrl: "./btn-buy.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBuyComponent {
  public count = 0;

  public increment() {
    this.count++;
  }

  public decrement() {
    this.count--;
  }
}
