interface Serializable<T> {
    deserialize(input: Object): T;
}

export class MenuItem implements Serializable<MenuItem> {
	name: string;
	description: string;
	price: number;
	ingredients: string;
	photoUrl: string;
	weight: number;

	deserialize(input) {
		this.name = input.name;
		this.description = input.description;
		this.price = input.price;
		this.ingredients = input.ingredients;
		this.photoUrl = input.photoUrl;
		this.weight = input.weight;
		return this;
	}

	filter(query: string): boolean {
		var r = new RegExp(query, "i");
		if (this.name.match(r) != null) {
			return true;
		}
		else {
			return false;
		}
	}
}

export class MenuCategory implements Serializable<MenuCategory> {
	name: string;
	description: string;


	menuItems: Array<MenuItem> = new Array<MenuItem>();
	filteredMenuItems: Array<MenuItem> = new Array<MenuItem>();

	deserialize(input) {
		this.name = input.name;
		this.description = input.description;
		for (var i = 0; i < input.menuItems.length; i++) {
			var menuItem: MenuItem = new MenuItem().deserialize(input.menuItems[i]);
			this.menuItems.push(menuItem);
		}
		this.filteredMenuItems = this.menuItems;
		return this;
	}

	filter(query: string) {
		this.filteredMenuItems = new Array<MenuItem>();
		for (var i = 0; i < this.menuItems.length; i++) {
			var menuItem: MenuItem = this.menuItems[i]''
			if (menuItem.filter(query)) {
				this.filteredMenuItems.push(menuItem);
			}
		}

	}
}

export class Menu implements Serializable<Menu>{
	categories: Array<MenuCategory> = new Array<MenuCategory>();

	deserialize(input) {
		for (var i = 0; i < input.menuCategories.length; i++) {
			var menuCategory: MenuCategory = new MenuCategory().deserialize(input.menuCategories[i]);
			this.categories.push(menuCategory);
		}

		return this;
	}

	filter(query: string) {
		for (var i = 0; i < this.categories.length; i++) {
			var menuCategory: MenuCategory = this.categories[i];
			menuCategory.filter(query);
		}
	}

}


export class Restaurant implements Serializable<Restaurant>{
	name: string;
	logoUrl: string;
	type: string;

	address: string;
	location: Array<number>;
	tel: string;
	email: string;


	websiteurl: string;
	fburl: string;
	tripadvisorurl: string;
	openhours: string;
	photos: Array<string>;

	hasTakeAway: boolean;
	hasDelivery: boolean;

	menu: Menu;

	deserialize(input) {
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
	}
} 