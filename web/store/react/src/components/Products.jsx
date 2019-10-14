import React from 'react';
import Product from './Product';

class Products extends React.Component {

	constructor(props) {
		super(props);

		this.products = [
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
			{
				prodId: 1,
				image: "https://res.cloudinary.com/evereq/image/upload/v1538675517/sushi_3_1000x1600_yfdxvp_f25npp.jpg",
				title: "Sushi and caviar mix",
				description: "Sushi and caviar mix",
				price: "$10.99"
			},
		];
	}

	render() {
		return (
			<div className="container">
				<div className="products">
					{
						this.products.map( (item) => (
							<Product key={item.prodId} image={item.image} title={item.title} description={item.description} price={item.price} />
						))
					}
				</div>
			</div>
		);
	}
}

export default Products;
