import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberWithSpaces",
})
export class NumberWithSpacesPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
