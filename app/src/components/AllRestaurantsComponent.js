/// <reference path="../../../node_modules/underscore/underscore.d.ts" />
System.register(["angular2/core", "../services/RestaurantsService", "./RestaurantComponent", "angular2/http", "../util/Dictionary", 'angular2/router', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, RestaurantsService_1, RestaurantComponent_1, http_1, Dictionary_1, router_1, common_1;
    var AllRestaurantsComponent;
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
            function (Dictionary_1_1) {
                Dictionary_1 = Dictionary_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AllRestaurantsComponent = (function () {
                function AllRestaurantsComponent(http, router, restaurantsService) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.restaurantsService = restaurantsService;
                    this.restaurantNames = new Dictionary_1.Dictionary();
                    this.filteredRestaurantNames = new Dictionary_1.Dictionary();
                    restaurantsService.restaurantNames.subscribe(function (response) {
                        _this.restaurantNames = response;
                        _this.filteredRestaurantNames = response;
                    });
                    this.restaurantsService.crtRestaurant.subscribe(function (r) {
                        _this.selectedRestaurant = r;
                    });
                }
                AllRestaurantsComponent.prototype.restaurantSelected = function (restaurantName) {
                    this.restaurantsService.setCrtRestaurant(restaurantName);
                };
                AllRestaurantsComponent.prototype.filterChanged = function () {
                    //TODO use underscore for this
                    if (this.filter === null || this.filter.length === 0) {
                        this.filteredRestaurantNames = this.restaurantNames;
                    }
                    else {
                        this.filteredRestaurantNames = new Dictionary_1.Dictionary();
                        for (var i = 0; i < this.restaurantNames.keys().length; i++) {
                            var key = this.restaurantNames.keys()[i];
                            var r = new RegExp(this.filter, "i");
                            if (key.match(r) != null) {
                                this.filteredRestaurantNames.add(key, this.restaurantNames[key]);
                            }
                        }
                    }
                };
                AllRestaurantsComponent = __decorate([
                    core_1.Component({
                        directives: [RestaurantComponent_1.RestaurantComponent, common_1.FORM_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: 'app/src/templates/allRestaurantsComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router, RestaurantsService_1.RestaurantsService])
                ], AllRestaurantsComponent);
                return AllRestaurantsComponent;
            })();
            exports_1("AllRestaurantsComponent", AllRestaurantsComponent);
        }
    }
});
//# sourceMappingURL=AllRestaurantsComponent.js.map