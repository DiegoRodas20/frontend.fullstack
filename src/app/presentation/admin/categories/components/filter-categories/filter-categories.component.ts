import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filter-categories',
    templateUrl: 'filter-categories.component.html'
})

export class FilterCategoriesComponent {

    formGroup: FormGroup | undefined;

    constructor() { }

    ngOnInit() {
        this.setFormFilter()
        this.subscribeForm()
    }

    setFormFilter() {
        this.formGroup = new FormGroup({
            name: new FormControl<string>(''),
            name1: new FormControl<string>(''),
            name2: new FormControl<string>(''),
            name3: new FormControl<string>('')
        })
    }

    subscribeForm() {
        this.formGroup?.valueChanges.subscribe(value => {
            console.log('VALOR', value)
        })
    }
}