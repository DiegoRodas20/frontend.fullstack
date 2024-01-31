import { Component } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html'
})

export class CategoriesComponent {

    name: string = 'HIJO'
    nameFather: string = 'PADRE'

    constructor() { }

    ngOnInit() { }

    public setName() {
        this.name = 'DIEGO'
    }

    public setOutput(event: any) {
        this.nameFather = event
    }
}