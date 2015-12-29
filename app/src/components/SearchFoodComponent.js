/// <reference path="../../../node_modules/underscore/underscore.d.ts" />
System.register(["angular2/core", "../services/RestaurantsService", "./RestaurantComponent", "angular2/http", 'angular2/common', 'angular2/router'], function(exports_1) {
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
    var core_1, RestaurantsService_1, RestaurantComponent_1, http_1, common_1, router_1;
    var SearchFoodComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestaurantsService_1_1) {
                RestaurantsService_1 = RestaurantsService_1_1;
            },
            function (RestaurantComponent_1_1) {
                RestaurantComponent_1 = RestaurantComponent_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SearchFoodComponent = (function () {
                function SearchFoodComponent(routeParams, restaurantsService) {
                    this.routeParams = routeParams;
                    this.restaurantsService = restaurantsService;
                    this.query = routeParams.get('query');
                    this.restaurants = restaurantsService.restaurants.values();
                    for (var i = 0; i < this.restaurants.length; i++) {
                        this.restaurants[i].filter(this.query);
                    }
                }
                SearchFoodComponent = __decorate([
                    core_1.Component({
                        directives: [RestaurantComponent_1.RestaurantComponent, common_1.FORM_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/src/templates/searchFoodComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, RestaurantsService_1.RestaurantsService])
                ], SearchFoodComponent);
                return SearchFoodComponent;
            })();
            exports_1("SearchFoodComponent", SearchFoodComponent);
        }
    }
});
//# sourceMappingURL=SearchFoodComponent.js.map