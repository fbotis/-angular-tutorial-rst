import {Component} from "angular2/core";
import {RestaurantsService} from "../services/RestaurantsService"
import {Restaurant,MenuCategory,MenuItem} from "../model/RestaurantModel";
import {RestaurantComponent} from "./RestaurantComponent";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Dictionary} from "../util/Dictionary";
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {NgClass} from 'angular2/common';

@Component({
	selector: 'restaurantForm',
	inputs: ['restaurant'],
	directives: [FORM_DIRECTIVES,NgClass],
	templateUrl: 'app/src/templates/restaurantForm.htm'
})
export class RestaurantFormComponent {
	restaurant: Restaurant;
	restaurantDetailsOff:boolean=false;
	menuItemsOff:boolean=false;

	constructor(public routeParams: RouteParams, public restaurantsService: RestaurantsService) {
		var restaurantName: string = routeParams.get('name');
		this.restaurant = restaurantsService.restaurants[restaurantName];
		if (this.restaurant==null){
			this.restaurant=new Restaurant();
		}
	}

	addNewMenuItem(category: MenuCategory) {
		category.menuItems.push(new MenuItem());
	}



	addNewCategory() {
		this.restaurant.menu.categories.push(new MenuCategory());
		var json=JSON.stringify(this.restaurant,function(key,value){
				if (key=="filteredMenuItems") return undefined;
    			else return value;

		});
		localStorage.setItem(this.restaurant.name+"_editform",json);
	}

	toggleRestaurantDetails(){
		this.restaurantDetailsOff=!this.restaurantDetailsOff;
	}

	toggleMenuItems(){
		this.menuItemsOff=!this.menuItemsOff;
	}

}
