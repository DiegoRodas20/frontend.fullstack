import { NgModule } from "@angular/core";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";
import { LayoutComponent } from "./layout/layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        CategoriesComponent,
        LayoutComponent
    ],
    imports: [
        RouterModule,
        AdminRouting
    ]
})

export class AdminModule { }