import React from 'react';
import { connect } from 'react-redux'
import customerActions from '../actions/customer';
import config from "../config";

class CartTable extends React.Component {

	constructor(props) {
		super(props);
	}

	handleDelete = (product_id) => {
		console.log('Deleting ' + product_id);

		this.props.updateCartItem(product_id, 0);
	};

	render() {
		let cartTotal = this.props.cart.reduce( (acc, item) => {
				let {totalPrice, totalQty} = acc;

				console.log('acc');
				console.log(acc);

				let price = parseFloat(item.price);

				totalPrice += price * item.qty;
				totalQty += item.qty;

				return {totalPrice, totalQty};
			},
			{ totalPrice: 0, totalQty: 0}
		);

		console.log(cartTotal);

		return (
			<table className="cartTable">
				<thead>
				<tr>
					<td className="cartHead">Product</td>
					<td className="cartHead">Price</td>
					<td className="cartHead">Quantity</td>
					<td className="cartHead">Total</td>
					<td className="cartHead">Remove</td>
				</tr>
				</thead>
				{
					this.props.cart.map((item) => {
						let imageUrl = config.apiBaseUrl + 'files/' + item.image.id + '/' + item.image.filename;

						let price = parseFloat(item.price);
						let total = price * item.qty;

						return (
							<tr>
								<td>
									<div className="cartProduct">
										<img className="cartProductImg"
												 src={imageUrl}/>
										<div className="cartProductName">{item.title}</div>
									</div>
								</td>
								<td className="cartPrice"><strong>${item.price}</strong></td>
								<td><strong>{item.qty}</strong></td>
								<td className="cartPrice"><strong>${total}</strong></td>
								<td><i className="fa fa-trash" aria-hidden="true" onClick={() => {this.handleDelete(item.product_id)}}/></td>
							</tr>
						);
					})
				}
				<tr>
					<td>
						<strong>TOTAL</strong>
					</td>
					<td className="cartPrice">
					</td>
					<td><strong>{cartTotal.totalQty}</strong></td>
					<td className="cartPrice"><strong>${cartTotal.totalPrice}</strong></td>
					<td>
					</td>
				</tr>
			</table>
		);
	}
}

function mapStateToProps (state) {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = {
	updateCartItem: customerActions.updateCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)
