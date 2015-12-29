import { Component } from 'angular2/core';
import {Menu} from '../model/RestaurantModel';
import {MenuCategoryComponent} from './MenuCategoryComponent';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'menu',
  inputs: ['menu'],
  directives: [MenuCategoryComponent, FORM_DIRECTIVES],
  templateUrl: 'app/src/templates/menuComponent.htm'
})
export class MenuComponent {
	  menu: Menu;
    filter: string;

  filterChanged() {
    this.menu.filter(this.filter);
  }
  
}