System.register(['angular2/core', './MenuComponent'], function(exports_1) {
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
    var core_1, MenuComponent_1;
    var RestaurantComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuComponent_1_1) {
                MenuComponent_1 = MenuComponent_1_1;
            }],
        execute: function() {
            RestaurantComponent = (function () {
                function RestaurantComponent() {
                }
                RestaurantComponent = __decorate([
                    core_1.Component({
                        selector: 'restaurant',
                        inputs: ['restaurant'],
                        directives: [MenuComponent_1.MenuComponent],
                        templateUrl: 'app/src/templates/restaurantComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestaurantComponent);
                return RestaurantComponent;
            })();
            exports_1("RestaurantComponent", RestaurantComponent);
        }
    }
});
//# sourceMappingURL=RestaurantComponent.js.map