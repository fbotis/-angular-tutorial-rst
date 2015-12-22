System.register(['angular2/core', './MenuItemComponent'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MenuItemComponent_1;
    var MenuCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MenuItemComponent_1_1) {
                MenuItemComponent_1 = MenuItemComponent_1_1;
            }],
        execute: function() {
            MenuCategoryComponent = (function () {
                function MenuCategoryComponent() {
                }
                MenuCategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'menuCategory',
                        inputs: ['menuCategory'],
                        directives: [MenuItemComponent_1.MenuItemComponent],
                        template: "\n  \t<div>\n  \t<h4>Category: {{menuCategory.name}}</h4>\n  \t<h4>DEscription: {{menuCategory.description}}</h4>\n\t<menuItem *ngFor=\"#menuItem of menuCategory.menuItems\" [menuItem]=\"menuItem\">\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuCategoryComponent);
                return MenuCategoryComponent;
            })();
            exports_1("MenuCategoryComponent", MenuCategoryComponent);
        }
    }
});
//# sourceMappingURL=MenuCategoryComponent.js.map