/// <reference path="../../../node_modules/underscore/underscore.d.ts" />

import {Component} from "angular2/core";
import {RestaurantsService} from "../services/RestaurantsService"
import {Restaurant} from "../model/RestaurantModel";
import {RestaurantComponent} from "./RestaurantComponent";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Dictionary} from "../util/Dictionary";
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
	directives: [RestaurantComponent, FORM_DIRECTIVES],
	providers: [HTTP_PROVIDERS],
	templateUrl: 'app/src/templates/allRestaurantsComponent.htm'
})
export class AllRestaurantsComponent {
	selectedRestaurant: Restaurant;
	restaurantNames: Dictionary = new Dictionary();
	filteredRestaurantNames: Dictionary = new Dictionary();
	filter: string;
	constructor(public http: Http, public router: Router, public restaurantsService: RestaurantsService) {
		restaurantsService.restaurantNames.subscribe((response:Dictionary)=>{
			this.restaurantNames = response;
			this.filteredRestaurantNames = response;
		});

		
		this.restaurantsService.crtRestaurant.subscribe((r) => {
			this.selectedRestaurant = r;
		});
	}

	restaurantSelected(restaurantName: string) {
		this.restaurantsService.setCrtRestaurant(restaurantName);
	}

	filterChanged() {
		//TODO use underscore for this
		if (this.filter === null || this.filter.length === 0) {
			this.filteredRestaurantNames = this.restaurantNames;
		} else {
			this.filteredRestaurantNames = new Dictionary();
			for (var i = 0; i < this.restaurantNames.keys().length; i++) {
				var key: string = this.restaurantNames.keys()[i];
				var r = new RegExp(this.filter, "i");
				if (key.match(r)!=null) {
					this.filteredRestaurantNames.add(key, this.restaurantNames[key]);
				}
			}
		}
	}
}