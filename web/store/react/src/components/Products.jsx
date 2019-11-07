import React from 'react';
import { connect } from 'react-redux'
import Product from './Product';

class Products extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="products">
					{
						this.props.products.map( (item) => (
							<Product key={item._id} productId={item._id} image={item.image} title={item.title} description={item.description} price={item.price} />
						))
					}
				</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(Products)
