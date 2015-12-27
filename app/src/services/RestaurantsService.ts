import {Component, Injectable, EventEmitter} from "angular2/core";
import {Restaurant} from "../model/RestaurantModel";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Dictionary} from "../util/Dictionary";

@Injectable()
export class RestaurantsService {
	restaurants: Dictionary = new Dictionary();
	restaurantNamesDictionary: Dictionary = new Dictionary();
	public crtRestaurant: EventEmitter<Restaurant> = new EventEmitter<Restaurant>(true);
	public restaurantNames: EventEmitter<Dictionary> = new EventEmitter<Dictionary>();


	constructor(public http: Http) {
		this.initRestaurantNames();
	}

	setCrtRestaurant(resturantName: string): EventEmitter<Restaurant> {
		if (!this.restaurants.containsKey(resturantName)) {
			var restaurantId = this.restaurantNamesDictionary[resturantName];
				this.http.request("/app/src/restaurantdata/" + restaurantId + "/" + restaurantId + ".json")
					.subscribe((res: Response) => {
						if (res.status > 199 && res.status < 300) {
							var json = res.json();
							var rest: Restaurant = new Restaurant().deserialize(json);
							this.restaurants.add(resturantName, rest);
							this.crtRestaurant.emit(rest);
						} else {
							this.crtRestaurant.emit(null);
						}
					},(error:any)=>{
						this.crtRestaurant.emit(null);
					});
				return this.crtRestaurant;
		}else{
			this.crtRestaurant.emit(this.restaurants[resturantName]);
			return this.crtRestaurant;
		}
	}


	private initRestaurantNames() {
		this.http.request("/app/src/restaurantdata/restaurants.json")
			.subscribe((res: Response) => {
				var json = res.json();
				this.restaurantNamesDictionary = new Dictionary();
				for (var i = 0; i < json.restaurants.length; i++) {
					this.restaurantNamesDictionary.add(json.restaurants[i].name, json.restaurants[i].id);
				}
				this.restaurantNames.emit(this.restaurantNamesDictionary);
			});
	}
}


