import { Component } from 'angular2/core';
import {MenuItem} from '../model/RestaurantModel';

@Component({
  selector: 'menuItem',
  inputs: ['menuItem'],
  templateUrl: 'app/src/templates/menuItem.htm'
})
export class MenuItemComponent {
  menuItem: MenuItem;
}