import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {getOrders} from "../../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		this.props.getOrders(this.props.orderStatus);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.orderStatus !== prevProps.orderStatus) {
			this.props.getOrders(this.props.orderStatus);
		}
	}

	render() {
		console.log('Render list orders!');
		console.log('Order status = ' + this.props.orderStatus);
		console.log(this.props.orders);

		let columns = [
			{
				title: "Name",
				dataIndex: "orderInfo.name"
			},
			{
				title: "Phone",
				dataIndex: "orderInfo.phone"
			},
			{
				title: "Address",
				dataIndex: "orderInfo.address"
			},
			{
				title: "Action",
				render: (text, record) => (
					<div>
						<Link to={`/admin/orders/view/${record._id}`}><Button>View</Button></Link>&nbsp;&nbsp;
						<Button>Verify</Button>&nbsp;&nbsp;
						<Button>Decline</Button>
					</div>
				)
			}
		];

		return (
				<React.Fragment>
					{this.props.orders &&	(
						<Table
							pagination={false}
							columns={columns}
							dataSource={this.props.orders}
						/>
					)}
				</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getOrders,
};

function mapStateToProps(state) {
	return {
		orders: state.orders,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
