import { Component } from 'angular2/core';
import {MenuCategory} from '../model/RestaurantModel';
import {MenuItemComponent} from './MenuItemComponent';

@Component({
  selector: 'menuCategory',
  inputs: ['menuCategory'],
  directives:[MenuItemComponent],
  template: `
  	<div>
  	<h4>Category: {{menuCategory.name}}</h4>
  	<h4>DEscription: {{menuCategory.description}}</h4>
	<menuItem *ngFor="#menuItem of menuCategory.menuItems" [menuItem]="menuItem">
  `
})
export class MenuCategoryComponent {
	menuCategory: MenuCategory;
}