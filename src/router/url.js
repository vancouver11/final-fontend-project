export const HOME ="/";
export const SHOP ="/shop";
export const CART ="/cart";
export const PRODUCTS = '/products';
export const  CHECKOUT= '/check-out';

export const PRODUCTS_BED = `${ PRODUCTS }/beds`;
export const PRODUCTS_DOOR = `${ PRODUCTS }/doors`;
export const CATEGORIES_DETAILS = `${ SHOP }/:code`;
export const GOOD = `${ SHOP }/:code/:id`;

export const NAVIGATION = [
	{
		title: 'Home',
		url: HOME,
		home: true,
	},
	{
		title: 'shop',
		url: SHOP,
	},

	{
		title: 'cart',
		url: CART,
		home: true,
	},
	{
		title: 'checkout',
		url: CHECKOUT,
		home: true,
	},
];