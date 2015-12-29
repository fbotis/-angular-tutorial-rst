System.register(["angular2/core", "../services/RestaurantsService", "../model/RestaurantModel", 'angular2/common', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, RestaurantsService_1, RestaurantModel_1, common_1, router_1, common_2;
    var RestaurantFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestaurantsService_1_1) {
                RestaurantsService_1 = RestaurantsService_1_1;
            },
            function (RestaurantModel_1_1) {
                RestaurantModel_1 = RestaurantModel_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RestaurantFormComponent = (function () {
                function RestaurantFormComponent(routeParams, restaurantsService) {
                    this.routeParams = routeParams;
                    this.restaurantsService = restaurantsService;
                    this.restaurantDetailsOff = false;
                    this.menuItemsOff = false;
                    var restaurantName = routeParams.get('name');
                    this.restaurant = restaurantsService.restaurants[restaurantName];
                }
                RestaurantFormComponent.prototype.addNewMenuItem = function (category) {
                    category.menuItems.push(new RestaurantModel_1.MenuItem());
                };
                RestaurantFormComponent.prototype.addNewCategory = function () {
                    this.restaurant.menu.categories.push(new RestaurantModel_1.MenuCategory());
                    console.log(JSON.stringify(this.restaurant));
                };
                RestaurantFormComponent.prototype.toggleRestaurantDetails = function () {
                    this.restaurantDetailsOff = !this.restaurantDetailsOff;
                };
                RestaurantFormComponent.prototype.toggleMenuItems = function () {
                    this.menuItemsOff = !this.menuItemsOff;
                };
                RestaurantFormComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurantForm',
                        inputs: ['restaurant'],
                        directives: [common_1.FORM_DIRECTIVES, common_2.NgClass],
                        templateUrl: 'app/src/templates/restaurantForm.htm'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, RestaurantsService_1.RestaurantsService])
                ], RestaurantFormComponent);
                return RestaurantFormComponent;
            })();
            exports_1("RestaurantFormComponent", RestaurantFormComponent);
        }
    }
});
//# sourceMappingURL=RestaurantFormComponent.js.map