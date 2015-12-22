import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Restaurant,Menu,MenuCategory,MenuItem} from "./model/RestaurantModel";
import {RestaurantComponent} from "./components/RestaurantComponent";


@Component({
  selector: 'rst',
  providers: [HTTP_PROVIDERS],
  directives: [RestaurantComponent],
  template: `
  <restaurant *ngFor="#restaurant of restaurants" [restaurant]="restaurant">
  `
})
class RstApp {
  restaurants: Array<Restaurant> = new Array<Restaurant>();

  constructor(public http: Http) {
    var restaurant: Restaurant = new Restaurant();
    this.http.request("/app/src/restaurantdata/rajcurry.json")
      .subscribe((res: Response) => {
        console.log(res.json());
        restaurant = restaurant.deserialize(res.json());
        this.restaurants.push(restaurant);
      });
    

  }

}

bootstrap(RstApp);
