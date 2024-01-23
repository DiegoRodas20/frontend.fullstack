import { NgModule } from "@angular/core";
import { CategoryModule } from "./categories/category.module";
import { ProductModule } from "./products/product.module";
import { PurchaseOrderModule } from "./purchase-order/purchase-order.module";

@NgModule({
    imports: [
        CategoryModule,
        ProductModule,
        PurchaseOrderModule
    ]
})

export class ApplicationModule { }