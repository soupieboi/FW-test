import { bindable, customElement } from 'aurelia-framework'

@customElement('custom-button')
export class CustomButtonElement {
  @bindable buttonContent: string

  attached() {
    console.log(`Attached Custom Button Element.`)
  }

  onClick() {
    console.log(`'clicked!'`)
    return
  }
}
