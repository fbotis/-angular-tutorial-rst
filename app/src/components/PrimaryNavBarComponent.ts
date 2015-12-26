/*
 * Angular
 */
import {bind, Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
APP_BASE_HREF,
ROUTER_DIRECTIVES,
ROUTER_BINDINGS,
ROUTER_PRIMARY_COMPONENT,
HashLocationStrategy,
LocationStrategy,
Router,
RouteConfig,
} from 'angular2/router';

/*
 * Components
 */
import {AllRestaurantsComponent} from './AllRestaurantsComponent';
import {SearchFoodComponent} from './SearchFoodComponent';



@Component({
  selector: 'primaryNav'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [routerLink]="['restaurants']">Restaurants</a>
        <a [routerLink]="['searchfood']">Search Food</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
@RouteConfig([
    { path: '/restaurants', name: 'restaurants', component: AllRestaurantsComponent, useAsDefault: true },
    { path: '/searchfood', name: 'searchfood', component: SearchFoodComponent },
])
export class PrimaryNavBarComponent{
  constructor(public router: Router) {
  }
}

