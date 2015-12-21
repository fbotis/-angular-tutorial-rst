import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import {Restaurant,Menu,MenuCategory,MenuItem} from "./model/RestaurantModel";
import {RestaurantComponent} from "./components/RestaurantComponent";

@Component({
  selector: 'rst',
  directives: [RestaurantComponent],
  template: `
  <restaurant [restaurant]="restaurant">
  <div><restaurant [restaurant]="restaurant"></restaurant></div>
  <restaurant [restaurant]="restaurant">
  `
})
class RstApp {
  restaurant: Restaurant;
  constructor() {
    var menu: Menu = new Menu();
    var category: MenuCategory = new MenuCategory("category1");
    menu.categories.push(category);
    var menuItem: MenuItem = new MenuItem("menuItem1");
    category.menuItems.push(menuItem);
    this.restaurant = new Restaurant(menu);
  }


}

bootstrap(RstApp);
