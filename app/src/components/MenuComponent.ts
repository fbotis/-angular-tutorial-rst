import { Component } from 'angular2/core';
import {Menu} from '../model/RestaurantModel';
import {MenuCategoryComponent} from './MenuCategoryComponent';

@Component({
  selector: 'menu',
  inputs: ['menu'],
  directives:[MenuCategoryComponent],
  template: `
  	<div>
  		<h3>Menu</h3>
		<menuCategory *ngFor="#menuCategory of menu.categories" [menuCategory]="menuCategory"></menuCategory>
	</div>
  `
})
export class MenuComponent {
	menu: Menu;
}