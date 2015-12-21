import { Component } from 'angular2/core';
import {MenuItem} from '../model/RestaurantModel';

@Component({
  selector: 'menuItem',
  inputs: ['menuItem'],
  template: `
    <div>
      <h5>{{menuItem.name}}</h5>
    </div>
  `
})
export class MenuItemComponent {
  menuItem: MenuItem;

}