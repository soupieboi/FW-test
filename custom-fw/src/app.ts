import { PLATFORM } from 'aurelia-pal'
import { Router, RouterConfiguration } from 'aurelia-router'
import './global-styles.scss'

export class App {
  router!: Router
  message: string

  constructor() {
    this.message = 'Hello World | App'
  }

  public configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router
    this.router.titleSeparator = ' | '
    config.title = 'Custom Framework Playground'
    config.map([
      {
        route: ['', 'home'],
        moduleId: PLATFORM.moduleName('./pages/home'),
        name: 'home',
        title: 'Home',
        nav: true,
      },
      {
        route: 'about',
        moduleId: PLATFORM.moduleName('./pages/about'),
        name: 'about',
        title: 'About',
      },
      {
        route: 'contact',
        moduleId: PLATFORM.moduleName('./pages/contact'),
        name: 'contact',
        title: 'Contact',
      },
      {
        route: 'controls',
        moduleId: PLATFORM.moduleName('./pages/controls'),
        name: 'controls',
        title: 'Controls'
      }
    ])
  }
}
