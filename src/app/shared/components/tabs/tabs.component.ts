import { NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  signal,
  TemplateRef,
} from "@angular/core";

@Component({
  selector: "app-tabs",
  imports: [NgTemplateOutlet],
  templateUrl: "./tabs.component.html",
  styleUrl: "./tabs.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input({ required: true })
  public tabs: {
    title: string;
    content: TemplateRef<unknown>;
  }[] = [];

  public activeTabIndex = signal(0);
}
