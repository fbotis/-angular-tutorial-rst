System.register([], function(exports_1) {
    var MenuItem, MenuCategory, Menu, Restaurant;
    return {
        setters:[],
        execute: function() {
            MenuItem = (function () {
                function MenuItem() {
                }
                MenuItem.prototype.deserialize = function (input) {
                    this.name = input.name;
                    this.description = input.description;
                    this.price = input.price;
                    this.ingredients = input.ingredients;
                    this.photoUrl = input.photoUrl;
                    this.weight = input.weight;
                    return this;
                };
                MenuItem.prototype.filter = function (query) {
                    var r = new RegExp(query, "i");
                    if (this.name.match(r) != null) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return MenuItem;
            })();
            exports_1("MenuItem", MenuItem);
            MenuCategory = (function () {
                function MenuCategory() {
                    this.menuItems = new Array();
                    this.filteredMenuItems = new Array();
                }
                MenuCategory.prototype.deserialize = function (input) {
                    this.name = input.name;
                    this.description = input.description;
                    for (var i = 0; i < input.menuItems.length; i++) {
                        var menuItem = new MenuItem().deserialize(input.menuItems[i]);
                        this.menuItems.push(menuItem);
                    }
                    this.filteredMenuItems = this.menuItems;
                    return this;
                };
                MenuCategory.prototype.filter = function (query) {
                    this.filteredMenuItems = new Array();
                    for (var i = 0; i < this.menuItems.length; i++) {
                        var menuItem = this.menuItems[i];
                        if (menuItem.filter(query)) {
                            this.filteredMenuItems.push(menuItem);
                        }
                    }
                };
                return MenuCategory;
            })();
            exports_1("MenuCategory", MenuCategory);
            Menu = (function () {
                function Menu() {
                    this.categories = new Array();
                }
                Menu.prototype.deserialize = function (input) {
                    for (var i = 0; i < input.menuCategories.length; i++) {
                        var menuCategory = new MenuCategory().deserialize(input.menuCategories[i]);
                        this.categories.push(menuCategory);
                    }
                    return this;
                };
                Menu.prototype.filter = function (query) {
                    for (var i = 0; i < this.categories.length; i++) {
                        var menuCategory = this.categories[i];
                        menuCategory.filter(query);
                    }
                };
                return Menu;
            })();
            exports_1("Menu", Menu);
            Restaurant = (function () {
                function Restaurant() {
                }
                Restaurant.prototype.deserialize = function (input) {
                    this.name = input.name;
                    this.logoUrl = input.logoUrl;
                    this.type = input.type;
                    this.address = input.address;
                    this.location = input.location;
                    this.tel = input.tel;
                    this.email = input.email;
                    this.websiteurl = input.websiteurl;
                    this.fburl = input.fburl;
                    this.tripadvisorurl = input.tripadvisorurl;
                    this.openhours = input.openhours;
                    this.photos = input.photos;
                    this.menu = new Menu().deserialize(input.menu);
                    return this;
                };
                Restaurant.prototype.filter = function (query) {
                    this.menu.filter(query);
                };
                return Restaurant;
            })();
            exports_1("Restaurant", Restaurant);
        }
    }
});
//# sourceMappingURL=RestaurantModel.js.map