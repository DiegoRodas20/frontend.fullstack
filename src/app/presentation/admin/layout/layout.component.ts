import { Component, OnInit } from "@angular/core";
import { ADMIN_PATH } from "../../../shared/routes/admin.routes";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})

export class LayoutComponent implements OnInit {

    sidebarVisible: boolean = false
    options: any[] = []

    constructor() { }

    ngOnInit() {
        this.setOptions()
    }

    public updateSidebar() {
        this.sidebarVisible = !this.sidebarVisible
    }

    private setOptions() {

        this.options = [
            {
                name: 'Categorias',
                path: ADMIN_PATH.CATEGORIES
            },
            {
                name: 'Productos',
                path: ADMIN_PATH.PRODUCTS
            },
            {
                name: 'Orden de compra',
                path: ADMIN_PATH.PURCHASE_ORDER
            }
        ]
    }
}