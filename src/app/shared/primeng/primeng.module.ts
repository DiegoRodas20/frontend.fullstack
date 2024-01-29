import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';

const modules = [
    ButtonModule,
    SpeedDialModule,
    TableModule,
    SidebarModule
]

@NgModule({
    imports: [modules],
    exports: [modules]
})

export class PrimeNGModule { }