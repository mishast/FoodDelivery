function configureApiRoutes(router) {

    router.get('/api/v1', restrict, (req, res, next) => {
        res.redirect('/admin/orders');
    });
}

export default configureApiRoutes;
