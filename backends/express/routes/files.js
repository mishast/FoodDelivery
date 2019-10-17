import filesApi from '../controllers/files';

function configureFilesRoutes(router) {
	router.post('/files', filesApi.postFile);
	router.get('/files/:id/:filename', filesApi.getFile);
	router.delete('/files/:id/:filename', filesApi.deleteFile);
}

export default configureFilesRoutes;
