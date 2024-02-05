import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrimeNGModule } from "../../shared/primeng/primeng.module";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";
import { FilterCategoriesComponent } from "./categories/components/filter-categories/filter-categories.component";
import { LayoutComponent } from "./layout/layout.component";
import { ProductsComponent } from "./products/products.component";
import { PurchaseOrderComponent } from "./purchase-order/purchase-order.component";


@NgModule({
    declarations: [
        CategoriesComponent,
        ProductsComponent,
        PurchaseOrderComponent,
        LayoutComponent,
        FilterCategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AdminRouting,
        PrimeNGModule
    ]
})

export class AdminModule { }