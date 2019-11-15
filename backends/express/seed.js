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
			price: '15'
		},
		{
			title: 'Pepperoni and tomato',
			description: 'Pepperoni & tomato',
			image: {
				id: '4bb3a936-f0ef-11e9-81b4-2a2ae2dbcce4',
				filename: 'pizza_2_duoq0f_zahy7o.jpg'
			},
			price: '10.5'
		},
		{
			title: 'Vegan Baguette & Wrap Platter',
			description:
				"Why not try our new Vegan Baguette and Wrap platter - it has such amazing fillings that you won't regret it.",
			image: {
				id: '6951ab9a-f0f0-11e9-81b4-2a2ae2dbcce4',
				filename: 'veganSandwitchPlatter_Hero.jpg'
			},
			price: '4'
		},
		{
			title: 'Beef hamburger',
			description:
				'A delicious hamburger with two steaks of 100% beef with onions, two slices of pickled cucumbers, a slice of cheese, and a special sauce.',
			image: {
				id: '3c64aeed-dc9e-4665-b975-88edd2bf66e3',
				filename: 'beef_hamburger.jpg'
			},
			price: '3.5'
		},
		{
			title: 'Chicken hamburger',
			description: 'Fried chicken cutlet, sesame bun, sauce, iceberg lettuce.',
			image: {
				id: '4bbd0210-f18a-11e9-81b4-2a2ae2dbcce4',
				filename: 'chicken_hamburger.jpg'
			},
			price: '2.5'
		},
		{
			title: 'Chicken wings',
			description: 'Crispy Chicken Wings.',
			image: {
				id: '740e2e88-f18a-11e9-81b4-2a2ae2dbcce4',
				filename: 'chicken_wings.jpg'
			},
			price: '3'
		},
		{
			title: 'Caesar salad',
			description:
				'A mixture of Romano and iceberg lettuce, cherry tomatoes, chicken breast fillet, croutons, cheese, Caesar sauce.',
			image: {
				id: '743ae3ee-f18d-11e9-81b4-2a2ae2dbcce4',
				filename: 'caesar_salad.jpg'
			},
			price: '3.5'
		},
		{
			title: 'Greece salad',
			description: 'Tomatoes, cucumbers, sweet peppers, onions, olives, feta cheese, olive oil.',
			image: {
				id: '2780dba2-f18e-11e9-81b4-2a2ae2dbcce4',
				filename: 'greece_salad.jpg'
			},
			price: '3.25'
		},
		{
			title: 'Borsch',
			description: 'Traditional ukrainian soup with beet and pork.',
			image: {
				id: '46de98c0-f18b-11e9-81b4-2a2ae2dbcce4',
				filename: 'borsch.jpg'
			},
			price: '8'
		},
		{
			title: 'Tomato soup',
			description: 'Tomato Soup with Mozzarella Cheese and Fresh Basil.',
			image: {
				id: 'd11a970a-f18b-11e9-81b4-2a2ae2dbcce4',
				filename: 'tomato_soup.jpg'
			},
			price: '4.5'
		},
		{
			title: 'Champignon cream soup',
			description:
				'Chicken stock, champignons, onions, garlic, sunflower oil, butter, cognac, cheese, salt, pepper.',
			image: {
				id: '864322f0-f18c-11e9-81b4-2a2ae2dbcce4',
				filename: 'champ_soup.jpg'
			},
			price: '5'
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
