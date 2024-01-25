import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";
import { LayoutComponent } from "./layout/layout.component";
import { PrimeNGModule } from "../../shared/primeng/primeng.module";


@NgModule({
    declarations: [
        CategoriesComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule,
        AdminRouting,
        PrimeNGModule
    ]
})

export class AdminModule { }