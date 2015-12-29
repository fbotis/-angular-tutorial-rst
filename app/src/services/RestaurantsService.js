System.register(["angular2/core", "../model/RestaurantModel", "angular2/http", "../util/Dictionary"], function(exports_1) {
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
    var core_1, RestaurantModel_1, http_1, Dictionary_1;
    var RestaurantsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestaurantModel_1_1) {
                RestaurantModel_1 = RestaurantModel_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Dictionary_1_1) {
                Dictionary_1 = Dictionary_1_1;
            }],
        execute: function() {
            RestaurantsService = (function () {
                function RestaurantsService(http) {
                    this.http = http;
                    this.restaurants = new Dictionary_1.Dictionary();
                    this.restaurantNamesDictionary = new Dictionary_1.Dictionary();
                    this.crtRestaurant = new core_1.EventEmitter(true);
                    this.restaurantNames = new core_1.EventEmitter();
                    this.loadingRestaurants = new Array();
                    this.initRestaurants();
                }
                RestaurantsService.prototype.setCrtRestaurant = function (resturantName) {
                    var _this = this;
                    if (!this.restaurants.containsKey(resturantName)) {
                        var restaurantId = this.restaurantNamesDictionary[resturantName];
                        this.http.request("/app/src/restaurantdata/" + restaurantId + "/" + restaurantId + ".json")
                            .subscribe(function (res) {
                            if (res.status > 199 && res.status < 300) {
                                var json = res.json();
                                var rest = new RestaurantModel_1.Restaurant().deserialize(json);
                                _this.restaurants.add(resturantName, rest);
                                _this.crtRestaurant.emit(rest);
                            }
                            else {
                                _this.crtRestaurant.emit(null);
                            }
                        }, function (error) {
                            _this.crtRestaurant.emit(null);
                        });
                        return this.crtRestaurant;
                    }
                    else {
                        this.crtRestaurant.emit(this.restaurants[resturantName]);
                        return this.crtRestaurant;
                    }
                };
                RestaurantsService.prototype.initRestaurants = function () {
                    var _this = this;
                    this.http.request("/app/src/restaurantdata/restaurants.json")
                        .subscribe(function (res) {
                        var json = res.json();
                        _this.restaurantNamesDictionary = new Dictionary_1.Dictionary();
                        for (var i = 0; i < json.restaurants.length; i++) {
                            _this.restaurantNamesDictionary.add(json.restaurants[i].name, json.restaurants[i].id);
                            _this.loadRestaurant(json.restaurants[i].name, json.restaurants[i].id);
                        }
                        _this.restaurantNames.emit(_this.restaurantNamesDictionary);
                    });
                };
                RestaurantsService.prototype.loadRestaurant = function (name, id) {
                    var _this = this;
                    //TODO store restaurant on storage and check the id (if id from server > crt id load it)
                    this.loadingRestaurants.push(name);
                    this.http.request("/app/src/restaurantdata/" + id + "/" + id + ".json")
                        .subscribe(function (res) {
                        if (res.status > 199 && res.status < 300) {
                            var json = res.json();
                            var rest = new RestaurantModel_1.Restaurant().deserialize(json);
                            _this.restaurants.add(name, rest);
                        }
                        else {
                            //todo error
                            console.error("Invalid restaurant " + name + " id " + id + " res.status " + res.status);
                        }
                        _this.loadingRestaurants.splice(_this.loadingRestaurants.indexOf(name), 1);
                    }, function (error) {
                        console.error("ERROR: Invalid restaurant " + name + " id " + id);
                        _this.loadingRestaurants.splice(_this.loadingRestaurants.indexOf(name), 1);
                    });
                };
                RestaurantsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RestaurantsService);
                return RestaurantsService;
            })();
            exports_1("RestaurantsService", RestaurantsService);
        }
    }
});
//# sourceMappingURL=RestaurantsService.js.map