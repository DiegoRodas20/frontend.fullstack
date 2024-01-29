import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";
import { LayoutComponent } from "./layout/layout.component";
import { PrimeNGModule } from "../../shared/primeng/primeng.module";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        CategoriesComponent,
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AdminRouting,
        PrimeNGModule
    ]
})

export class AdminModule { }