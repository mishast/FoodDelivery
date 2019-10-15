import productsActions from './actions/products';

const SsrRoutes = [
	{
		path: '/',
		action: productsActions.loadProducts
	},
	{
		path: '/product'
	},
	{
		path: '/cart'
	},
	{}
];

export default SsrRoutes;
