import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-key-value",
  imports: [],
  templateUrl: "./key-value.component.html",
  styleUrl: "./key-value.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyValueComponent {
  @Input({ required: true }) public key: string | number | undefined;
  @Input({ required: true }) public value: string | number | undefined;
  @Input() public style: "standart" | "fifty-fifty" = "standart";
}
