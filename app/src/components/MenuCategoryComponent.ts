import { Component } from 'angular2/core';
import {MenuCategory} from '../model/RestaurantModel';
import {MenuItemComponent} from './MenuItemComponent';

@Component({
  selector: 'menuCategory',
  inputs: ['menuCategory'],
  directives:[MenuItemComponent],
  templateUrl: 'app/src/templates/menuCategoryComponent.htm'
})
export class MenuCategoryComponent {
	menuCategory: MenuCategory;
}