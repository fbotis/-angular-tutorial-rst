System.register(['angular2/platform/browser', 'angular2/core', "./model/RestaurantModel", "./components/RestaurantComponent"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, RestaurantModel_1, RestaurantComponent_1;
    var RstApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RestaurantModel_1_1) {
                RestaurantModel_1 = RestaurantModel_1_1;
            },
            function (RestaurantComponent_1_1) {
                RestaurantComponent_1 = RestaurantComponent_1_1;
            }],
        execute: function() {
            RstApp = (function () {
                function RstApp() {
                    var menu = new RestaurantModel_1.Menu();
                    var category = new RestaurantModel_1.MenuCategory("category1");
                    menu.categories.push(category);
                    var menuItem = new RestaurantModel_1.MenuItem("menuItem1");
                    category.menuItems.push(menuItem);
                    this.restaurant = new RestaurantModel_1.Restaurant(menu);
                }
                RstApp = __decorate([
                    core_1.Component({
                        selector: 'rst',
                        directives: [RestaurantComponent_1.RestaurantComponent],
                        template: "\n  <restaurant [restaurant]=\"restaurant\">\n  <div><restaurant [restaurant]=\"restaurant\"></restaurant></div>\n  <restaurant [restaurant]=\"restaurant\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RstApp);
                return RstApp;
            })();
            browser_1.bootstrap(RstApp);
        }
    }
});
//# sourceMappingURL=app.js.map