import React from 'react';
import config from '../config'

class Product extends React.Component {
	render() {
		let imageUrl = config.apiBaseUrl + 'files/' + this.props.image.id + '/' + this.props.image.filename;

		return (
			<div className="product">
				<img src={imageUrl} />
					<div className="bottom">
						<h1>{this.props.title}</h1>
						<h2>{this.props.description}</h2>
						<div className="price">${this.props.price}</div>
						<div className="button">Buy</div>
					</div>
			</div>
		);
	}
}

export default Product;
