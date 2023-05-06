import { bindable, bindingMode, customElement } from 'aurelia-framework'

@customElement('search-element')
export class CustomSearchElement {
    @bindable placeholder: string = ''
    @bindable value: string = ''

    attached() {
        console.log('Attached Search element')
    }

    handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.value = target.value
        console.log('Value has been changed...', this.value)
    } 
}