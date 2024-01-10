import { NgModule } from "@angular/core";
import { AdminRouting } from "./admin.routing";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
    declarations: [
        CategoriesComponent
    ],
    imports: [
        AdminRouting
    ]
})

export class AdminModule { }