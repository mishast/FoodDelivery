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
			title: 'Sushi and caviar mix',
			description: 'Sushi & caviar mix',
			image: {
				id: '368d575c-f0ed-11e9-a713-2a2ae2dbcce4',
				filename: 'sushi_3_1000x1600_yfdxvp_f25npp.jpg'
			},
			price: '10.99'
		},
		{
			title: 'Mix of 23 sushi',
			description: '23 Sushi Mix',
			image: {
				id: '56945ecc-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'sushi_o8gcsm_fxgdij.jpg'
			},
			price: '11.99'
		},
		{
			title: 'Pepperoni and tomato',
			description: 'Pepperoni & tomato',
			image: {
				id: '4bb3a936-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'pizza_2_duoq0f_zahy7o.jpg'
			},
			price: '11.99'
		},
		{
			title: 'Vegan Baguette & Wrap Platter',
			description: 'Why not try our new Vegan Baguette and Wrap platter - it has such amazing fillings that you won\'t regret it. ',
			image: {
				id: '6951ab9a-f0f0-11e9-81b4-2a2ae2dbcce4',
				filename: 'veganSandwitchPlatter_Hero.jpg'
			},
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
