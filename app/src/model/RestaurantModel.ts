export class MenuItem {
	constructor(public name: string) {

	}
}

export class MenuCategory {
	menuItems: Array<MenuItem> = new Array<MenuItem>();
	constructor(public name: string) {

	}
}

export class Menu {
	categories: Array<MenuCategory> = new Array<MenuCategory>();

}


export class Restaurant {
	constructor(public menu:Menu){
	}
} 