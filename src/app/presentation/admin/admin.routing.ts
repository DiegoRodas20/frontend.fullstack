import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class AdminRouting { }