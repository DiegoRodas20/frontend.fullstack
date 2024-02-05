import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ADMIN_PATH } from "../../shared/routes/admin.routes";
import { CategoriesComponent } from "./categories/categories.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProductsComponent } from "./products/products.component";
import { PurchaseOrderComponent } from "./purchase-order/purchase-order.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ADMIN_PATH.CATEGORIES,
        component: CategoriesComponent
      },
      {
        path: ADMIN_PATH.PRODUCTS,
        component: ProductsComponent
      },
      {
        path: ADMIN_PATH.PURCHASE_ORDER,
        component: PurchaseOrderComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class AdminRouting { }