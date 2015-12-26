import {Component} from "angular2/core";
import {Restaurant} from "../model/RestaurantModel";
import {RestaurantComponent} from "./RestaurantComponent";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';


@Component({
	directives: [RestaurantComponent],
	providers: [HTTP_PROVIDERS],
	templateUrl: 'app/src/templates/allRestaurantsComponent.htm'
})
export class AllRestaurantsComponent {
	restaurants: Array<Restaurant> = new Array<Restaurant>();
	constructor(public http: Http, public router: Router) {
		var restaurant: Restaurant = new Restaurant();
		this.http.request("/app/src/restaurantdata/rajcurry.json")
			.subscribe((res: Response) => {
				restaurant = restaurant.deserialize(res.json());
				this.restaurants.push(restaurant);
			});
	}
}