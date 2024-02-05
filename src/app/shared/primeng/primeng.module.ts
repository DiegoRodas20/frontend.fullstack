import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';

const modules = [
    ButtonModule,
    SpeedDialModule,
    TableModule,
    SidebarModule,
    InputTextModule
]

@NgModule({
    imports: [modules],
    exports: [modules]
})

export class PrimeNGModule { }