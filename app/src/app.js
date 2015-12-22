System.register(['angular2/platform/browser', 'angular2/core', "angular2/http", "./model/RestaurantModel", "./components/RestaurantComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, http_1, RestaurantModel_1, RestaurantComponent_1;
    var RstApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (RestaurantModel_1_1) {
                RestaurantModel_1 = RestaurantModel_1_1;
            },
            function (RestaurantComponent_1_1) {
                RestaurantComponent_1 = RestaurantComponent_1_1;
            }],
        execute: function() {
            RstApp = (function () {
                function RstApp(http) {
                    var _this = this;
                    this.http = http;
                    this.restaurants = new Array();
                    var restaurant = new RestaurantModel_1.Restaurant();
                    this.http.request("/app/src/restaurantdata/rajcurry.json")
                        .subscribe(function (res) {
                        console.log(res.json());
                        restaurant = restaurant.deserialize(res.json());
                        _this.restaurants.push(restaurant);
                    });
                }
                RstApp = __decorate([
                    core_1.Component({
                        selector: 'rst',
                        providers: [http_1.HTTP_PROVIDERS],
                        directives: [RestaurantComponent_1.RestaurantComponent],
                        template: "\n  <restaurant *ngFor=\"#restaurant of restaurants\" [restaurant]=\"restaurant\">\n  "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RstApp);
                return RstApp;
            })();
            browser_1.bootstrap(RstApp);
        }
    }
});
//# sourceMappingURL=app.js.map