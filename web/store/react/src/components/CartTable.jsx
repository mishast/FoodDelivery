import React from 'react';
import { connect } from 'react-redux'
import customerActions from '../actions/customer';
import config from "../config";
import displayCurrency from '../helpers/displayCurrency';

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
			<React.Fragment>
			{
				this.props.cart.map((item) => {
					let imageUrl = config.apiBaseUrl + 'files/' + item.image.id + '/' + item.image.filename;

					let price = parseFloat(item.price);
					let total = price * item.qty;

					return (
						<div className="cart-prod">
							<div className="cart-prod-img-cont">
								<img className="cart-prod-img" src={imageUrl} />
							</div>
							<div className="cart-prod-det">
							<div className="cart-prod-head">{item.title}</div>
							<p className="cart-prod-desc">{item.description}</p>
							</div>
							<div className="cart-prod-prc">${displayCurrency(price)}</div>
							<div className="cart-prod-mul">x</div>
							<div className="cart-prod-qty">
								<input type="text" value={item.qty} />
							</div>
							<div className="cart-prod-removal">
							{
									!this.props.disableDelete &&
									(
										<button className="remove-cart-prod" onClick={() => {
											this.handleDelete(item.product_id)
										}}>
											Remove
										</button>
									)
							}
							</div>
							<div className="cart-prod-prc-spacer" />
							<div className="cart-prod-line-prc">${displayCurrency(total)}</div>
						</div>
					);
				})
			}
			<div className="cart-prod">
				<div className="cart-total">TOTAL</div>
				<div className="cart-prod-line-prc">${displayCurrency(cartTotal.totalPrice)}</div>
			</div>

			</React.Fragment>
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
