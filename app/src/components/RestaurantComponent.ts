import {Component} from 'angular2/core';
import {Restaurant} from '../model/RestaurantModel';
import {RestaurantFormComponent} from './RestaurantFormComponent';
import {MenuComponent} from './MenuComponent';
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';

@Component({
	selector: 'restaurant',
	inputs: ['restaurant'],
	directives: [MenuComponent,ROUTER_DIRECTIVES],
	templateUrl: 'app/src/templates/restaurantComponent.htm'
})
export class RestaurantComponent {
	restaurant: Restaurant;
}
