System.register(['angular2/core', 'angular2/router', './AllRestaurantsComponent', './SearchFoodComponent'], function(exports_1) {
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
    var core_1, router_1, AllRestaurantsComponent_1, SearchFoodComponent_1;
    var PrimaryNavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AllRestaurantsComponent_1_1) {
                AllRestaurantsComponent_1 = AllRestaurantsComponent_1_1;
            },
            function (SearchFoodComponent_1_1) {
                SearchFoodComponent_1 = SearchFoodComponent_1_1;
            }],
        execute: function() {
            PrimaryNavBarComponent = (function () {
                function PrimaryNavBarComponent(router) {
                    this.router = router;
                }
                PrimaryNavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'primaryNav'
                    }),
                    core_1.View({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <h1>Router Sample</h1>\n      <div class=\"navLinks\">\n        <a [routerLink]=\"['restaurants']\">Restaurants</a>\n        <a [routerLink]=\"['searchfood']\">Search Food</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"content\">\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
                    }),
                    router_1.RouteConfig([
                        { path: '/restaurants', name: 'restaurants', component: AllRestaurantsComponent_1.AllRestaurantsComponent, useAsDefault: true },
                        { path: '/searchfood', name: 'searchfood', component: SearchFoodComponent_1.SearchFoodComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], PrimaryNavBarComponent);
                return PrimaryNavBarComponent;
            })();
            exports_1("PrimaryNavBarComponent", PrimaryNavBarComponent);
        }
    }
});
//# sourceMappingURL=PrimaryNavBarComponent.js.map