System.register([], function(exports_1) {
    var MenuItem, MenuCategory, Menu, Restaurant;
    return {
        setters:[],
        execute: function() {
            MenuItem = (function () {
                function MenuItem(name) {
                    this.name = name;
                }
                return MenuItem;
            })();
            exports_1("MenuItem", MenuItem);
            MenuCategory = (function () {
                function MenuCategory(name) {
                    this.name = name;
                    this.menuItems = new Array();
                }
                return MenuCategory;
            })();
            exports_1("MenuCategory", MenuCategory);
            Menu = (function () {
                function Menu() {
                    this.categories = new Array();
                }
                return Menu;
            })();
            exports_1("Menu", Menu);
            Restaurant = (function () {
                function Restaurant(menu) {
                    this.menu = menu;
                }
                return Restaurant;
            })();
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=RestaurantModel.js.map