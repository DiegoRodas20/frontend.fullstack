import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrimeNGModule } from "../../shared/primeng/primeng.module";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";
import { FilterCategoriesComponent } from "./categories/components/filter-categories/filter-categories.component";
import { LayoutComponent } from "./layout/layout.component";


@NgModule({
    declarations: [
        CategoriesComponent,
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