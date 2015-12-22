import {Component} from 'angular2/core';
import {Restaurant} from '../model/RestaurantModel';
import {MenuComponent} from './MenuComponent';

@Component({
	selector: 'restaurant',
	inputs: ['restaurant'],
	directives: [MenuComponent],
	template: `
	<div>Restaurant name: {{restaurant.name}}</div>
	<div>Restaurant description: {{restaurant.description}}</div>
	<div>Restaurant type: {{restaurant.type}}</div>
	<div>Restaurant address: {{restaurant.address}}</div>
	<div>Restaurant location: {{restaurant.location}}</div>
	<div>Restaurant tel: {{restaurant.tel}}</div>
	<div>Restaurant email: {{restaurant.email}}</div>
	<div>Restaurant websiteurl: {{restaurant.websiteurl}}</div>
	<div>Restaurant fburl: {{restaurant.fburl}}</div>
	<div>Restaurant tripadvisorurl: {{restaurant.tripadvisorurl}}</div>
	<div>Restaurant openhours: {{restaurant.openhours}}</div>
	<div>Restaurant photos: {{restaurant.photos}}</div>


	<menu [menu]="restaurant.menu">
  `
})
export class RestaurantComponent {
	restaurant: Restaurant;
}