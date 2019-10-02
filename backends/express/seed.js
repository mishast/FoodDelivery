import mongo from './setup/mongo';

mongo.connect(async db => {
	const productsCount = await db.collection('products').countDocuments({});

	if (productsCount > 0) {
		await db.collection('products').drop();
	}

	const usersCount = await db.collection('users').countDocuments({});

	if (usersCount > 0) {
		await db.collection('users').drop();
	}

	await db.collection('products').insertMany([
		{
			title: 'title1',
			description: 'description1',
			image: 'https://image/url1',
			price: '10.99'
		},
		{
			title: 'title2',
			description: 'description2',
			image: 'https://image/url2',
			price: '11.99'
		}
	]);

	await db.collection('users').insertMany([
		{
			login: 'admin',
			password: 'admin'
		}
	]);

	process.exit();
});
