import { Component } from '@angular/core';
import {NavBarComponent} from './nav-bar.component';

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>
    <header></header>
    <router-outlet class="mainsection"></router-outlet>
  `
})
export class AppComponent  {
  name = 'Angular';
 }
