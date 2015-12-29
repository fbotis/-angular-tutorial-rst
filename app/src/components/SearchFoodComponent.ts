/// <reference path="../../../node_modules/underscore/underscore.d.ts" />

import {Component} from "angular2/core";
import {RestaurantsService} from "../services/RestaurantsService"
import {Restaurant} from "../model/RestaurantModel";
import {RestaurantComponent} from "./RestaurantComponent";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Dictionary} from "../util/Dictionary";
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams} from 'angular2/router';

@Component({
	directives: [RestaurantComponent, FORM_DIRECTIVES],
	providers: [HTTP_PROVIDERS],
	templateUrl: 'app/src/templates/searchFoodComponent.htm'
})
export class SearchFoodComponent {
	query: string;
	restaurants: Array<Restaurant>;
	constructor(public routeParams: RouteParams, public restaurantsService: RestaurantsService) {
		this.query = routeParams.get('query');
		this.restaurants = restaurantsService.restaurants.values();
		for (var i = 0; i < this.restaurants.length; i++) {
			this.restaurants[i].filter(this.query);
		}
	}

}