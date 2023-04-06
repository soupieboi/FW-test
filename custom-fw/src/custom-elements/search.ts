import { bindable, customElement } from 'aurelia-framework'

@customElement('search-element')
export class CustomSearchElement {
    @bindable placeholder: string = ''

    attached() {
        console.log('Attached Search element')
    }
}