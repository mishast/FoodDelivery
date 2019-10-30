const routes = {
	login: {
		path: "/login"
	},
	admin: {
		base: "/admin",
		account: "/admin/account",
		orders:	{
			new: "/admin/orders/new",
			verified: "/admin/orders/verified",
			inwork: "/admin/orders/inwork",
			readyForDelivery: "/admin/orders/ready",
			onDelivery: "/admin/orders/onDelivery",
			completed: "/admin/orders/completed",
			canceled: "/admin/orders/canceled",
		},
		products: {
			new: "/admin/products/new",
			list: "/admin/products/list"
		}
	}
};

export default routes;
