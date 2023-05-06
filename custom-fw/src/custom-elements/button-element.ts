import { bindable, customElement, useShadowDOM } from 'aurelia-framework'

@customElement('custom-button')
export class CustomButtonElement {
  @bindable buttonContent: string = ''

  public attached() {
    console.log(`Attached Custom Button Element.`)
  }

  constructor() {
    this.buttonContent = 'Click me'
  }

  onClick() {
    console.log(`'clicked!'`)
    return
  }
}
