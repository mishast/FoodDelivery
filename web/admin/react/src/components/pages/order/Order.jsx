import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {getOrder} from "../../../actions";
import {connect} from "react-redux";

class Orders extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getOrder(this.props.orderId);
	}

	render() {
		console.log(this.props.orderId);
		if (this.props.order) {
			console.log(this.props.order.items);
		}

		return (
			<React.Fragment>
				ORDER {this.props.orderId}
				{this.props.order &&
					<React.Fragment>
						name {this.props.order.orderInfo.name}<br/>
						phone {this.props.order.orderInfo.phone}<br/>
						address {this.props.order.orderInfo.address}<br/>
						comment {this.props.order.orderInfo.comment}<br/>
					</React.Fragment>
				}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getOrder,
};

function mapStateToProps(state) {
	return {
		order: state.order,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
