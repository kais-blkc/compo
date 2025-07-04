import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/product/product.component").then(
        (m) => m.ProductComponent
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
