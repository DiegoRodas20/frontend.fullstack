import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-layout',
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.component.scss']
})

export class LayoutComponent implements OnInit {

    sidebarVisible: boolean = false
    options: string[] = []

    constructor() { }

    ngOnInit() {
        this.setOptions()
    }

    public updateSidebar() {
        this.sidebarVisible = !this.sidebarVisible
    }

    private setOptions() {
        this.options = ["Categorias", "Productos", "Orden de compra"]
    }

}