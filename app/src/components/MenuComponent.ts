import { Component } from 'angular2/core';
import {Menu} from '../model/RestaurantModel';
import {MenuCategoryComponent} from './MenuCategoryComponent';

@Component({
  selector: 'menu',
  inputs: ['menu'],
  directives:[MenuCategoryComponent],
  template: `
	<menuCategory *ngFor="#menuCategory of menu.categories" [menuCategory]="menuCategory">
  `
})
export class MenuComponent {
	menu: Menu;
}