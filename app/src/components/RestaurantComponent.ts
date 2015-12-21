import {Component} from 'angular2/core';
import {Restaurant} from '../model/RestaurantModel';
import {MenuComponent} from './MenuComponent';

@Component({
	selector: 'restaurant',
	inputs: ['restaurant'],
	directives: [MenuComponent],
	template: `
	<menu [menu]="restaurant.menu">
  `
})
export class RestaurantComponent {
	restaurant: Restaurant;
}