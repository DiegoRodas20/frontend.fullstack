import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SpeedDialModule } from 'primeng/speeddial';
import { TableModule } from 'primeng/table';

const modules: any = [
    ButtonModule,
    SpeedDialModule,
    TableModule
]

@NgModule({
    imports: [modules],
    exports: [modules]
})

export class PrimeNGModule { }