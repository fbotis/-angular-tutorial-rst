import { Component } from 'angular2/core';
import {MenuCategory} from '../model/RestaurantModel';
import {MenuItemComponent} from './MenuItemComponent';

@Component({
  selector: 'menuCategory',
  inputs: ['menuCategory'],
  directives:[MenuItemComponent],
  template: `
	<menuItem *ngFor="#menuItem of menuCategory.menuItems" [menuItem]="menuItem">
  `
})
export class MenuCategoryComponent {
	menuCategory: MenuCategory;
}