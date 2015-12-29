System.register(['angular2/platform/browser', 'angular2/router', "./components/AllRestaurantsComponent", "./components/SearchFoodComponent", 'angular2/core', "./services/RestaurantsService", "angular2/http", 'angular2/common'], function(exports_1) {
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
    var browser_1, router_1, AllRestaurantsComponent_1, SearchFoodComponent_1, core_1, RestaurantsService_1, http_1, common_1;
    var RstApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AllRestaurantsComponent_1_1) {
                AllRestaurantsComponent_1 = AllRestaurantsComponent_1_1;
            },
            function (SearchFoodComponent_1_1) {
                SearchFoodComponent_1 = SearchFoodComponent_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestaurantsService_1_1) {
                RestaurantsService_1 = RestaurantsService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RstApp = (function () {
                function RstApp(router) {
                    this.router = router;
                }
                RstApp.prototype.filterChanged = function () {
                    this.router.navigate(['./Search', { query: this.filter }]);
                };
                RstApp = __decorate([
                    core_1.Component({
                        selector: 'rst',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        templateUrl: 'app/src/templates/app.htm'
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: AllRestaurantsComponent_1.AllRestaurantsComponent, useAsDefault: true },
                        { path: '/search/:query', name: 'Search', component: SearchFoodComponent_1.SearchFoodComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RstApp);
                return RstApp;
            })();
            exports_1("RstApp", RstApp);
            browser_1.bootstrap(RstApp, [http_1.HTTP_PROVIDERS,
                RestaurantsService_1.RestaurantsService,
                router_1.ROUTER_BINDINGS,
                core_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(RstApp),
                core_1.bind(router_1.APP_BASE_HREF).toValue('/')
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map