System.register(['angular2/core', './MenuCategoryComponent', 'angular2/common'], function(exports_1) {
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
    var core_1, MenuCategoryComponent_1, common_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuCategoryComponent_1_1) {
                MenuCategoryComponent_1 = MenuCategoryComponent_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent() {
                }
                MenuComponent.prototype.filterChanged = function () {
                    this.menu.filter(this.filter);
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu',
                        inputs: ['menu'],
                        directives: [MenuCategoryComponent_1.MenuCategoryComponent, common_1.FORM_DIRECTIVES],
                        templateUrl: 'app/src/templates/menuComponent.htm'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuComponent);
                return MenuComponent;
            })();
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=MenuComponent.js.map