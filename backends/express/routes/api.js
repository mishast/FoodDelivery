import publicApi from '../controllers/api/v1/public';
import customerApi from '../controllers/api/v1/customer';
import adminApi from '../controllers/api/v1/admin';

function configureApiRoutes(router) {
	router.get('/api/v1/products', publicApi.getProducts);
	router.get('/api/v1/product/:id', publicApi.getProduct);
	router.post('/api/v1/customer', customerApi.createCustomer);
	router.get('/api/v1/customer/:id/cart', customerApi.getCart);
	router.post('/api/v1/customer/:id/cart/updateItem', customerApi.updateCartItem);
	router.post('/api/v1/customer/:id/cart/checkout', customerApi.checkoutCart);
	router.post('/api/v1/admin/login', adminApi.login);
	router.get('/api/v1/admin/orders', adminApi.getOrders);
	router.get('/api/v1/admin/orders/:id', adminApi.getOrder);
	router.post('/api/v1/admin/orders/:id/status', adminApi.setOrderStatus);
	router.get('/api/v1/admin/products', adminApi.getProducts);
	router.post('/api/v1/admin/products/:id', adminApi.createOrUpdateProduct);
	router.delete('/api/v1/admin/products/:id', adminApi.deleteProduct);
	router.get('/api/v1/admin/products/:id', adminApi.getProduct);
	router.post('/api/v1/admin/products/:id/image', adminApi.addProductImage);
	router.delete('/api/v1/admin/products/:id/image', adminApi.deleteProductImage);
}

export default configureApiRoutes;
