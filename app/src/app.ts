import { bootstrap } from 'angular2/platform/browser';
import {APP_BASE_HREF, ROUTER_DIRECTIVES, ROUTER_BINDINGS, ROUTER_PRIMARY_COMPONENT, HashLocationStrategy, LocationStrategy, Router, RouteConfig, } from 'angular2/router';
import {PrimaryNavBarComponent} from "./components/PrimaryNavBarComponent";
import {AllRestaurantsComponent} from "./components/AllRestaurantsComponent";
import {SearchFoodComponent} from "./components/SearchFoodComponent";
import {bind, Component, View} from 'angular2/core';
import {RestaurantsService} from "./services/RestaurantsService";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";


@Component({
  selector: 'rst',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/src/templates/app.htm'
})
@RouteConfig([
    { path: '/home', name: 'Home', component: AllRestaurantsComponent, useAsDefault: true },
    { path: '/deals', name: 'Deals', component: SearchFoodComponent },
    { path: '/about', name: 'About', component: SearchFoodComponent },
    { path: '/contact', name: 'Contact', component: SearchFoodComponent },
  ])
class RstApp {
  constructor(public router: Router) {
  }
}

bootstrap(RstApp, [HTTP_PROVIDERS,
  RestaurantsService,
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(RstApp),
  bind(APP_BASE_HREF).toValue('/'),
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);

