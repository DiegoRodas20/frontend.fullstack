import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filter-categories',
    templateUrl: 'filter-categories.component.html'
})

export class FilterCategoriesComponent {

    @Input() prueba: string = ''
    @Output() pruebaSalida = new EventEmitter<string>()

    constructor() { }

    ngOnInit() {
    }

    public setOutput(){
        this.pruebaSalida.emit('MOISES')
    }
}