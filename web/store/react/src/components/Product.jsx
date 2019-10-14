import React from 'react';

class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<img src={this.props.image} />
					<div className="bottom">
						<h1>{this.props.title}</h1>
						<h2>{this.props.description}</h2>
						<div className="price">{this.props.title}</div>
						<div className="button">Buy</div>
					</div>
			</div>
		);
	}
}

export default Product;
