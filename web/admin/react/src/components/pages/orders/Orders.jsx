import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {getOrdersList, setOrderStatus} from "../../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import * as ordersStatus from "../../../constants/ordersStatus";

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		this.props.getOrdersList(this.props.orderStatus);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.orderStatus !== prevProps.orderStatus) {
			this.props.getOrdersList(this.props.orderStatus);
		}
	}

	handleChangeStatus = (orderId, newStatus) => {
		this.props.setOrderStatus(orderId, newStatus);
	};

	render() {
		console.log('Render list orders!');
		console.log('Order status = ' + this.props.orderStatus);
		console.log(this.props.orders);

		const availableButtons = {
			[ordersStatus.NEW]:
				[
					{	title: 'Verify', newStatus: ordersStatus.VERIFIED },
					{	title: 'Decline', newStatus: ordersStatus.CANCELED }
				],
			[ordersStatus.VERIFIED]:
				[
					{	title: 'In work', newStatus: ordersStatus.IN_WORK },
					{	title: 'Cancel', newStatus: ordersStatus.CANCELED }
				],
			[ordersStatus.IN_WORK]:
				[
					{	title: 'Ready', newStatus: ordersStatus.READY_FOR_DELIVERY },
					{	title: 'Cancel', newStatus: ordersStatus.CANCELED }
				],
			[ordersStatus.READY_FOR_DELIVERY]:
				[
					{	title: 'To delivery', newStatus: ordersStatus.ON_DELIVERY },
					{	title: 'Cancel', newStatus: ordersStatus.CANCELED }
				],
			[ordersStatus.ON_DELIVERY]:
				[
					{	title: 'Completed', newStatus: ordersStatus.COMPLETED },
					{	title: 'Cancel', newStatus: ordersStatus.CANCELED }
				],
		};

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
						{availableButtons[this.props.orderStatus] && availableButtons[this.props.orderStatus].map(
							(button) => (
								<React.Fragment>
									<Button onClick={() => this.handleChangeStatus(record._id, button.newStatus)}>{button.title}</Button>&nbsp;&nbsp;
								</React.Fragment>
							)

						)}
					</div>
				)
			}
		];

		return (
			<div className="content">
					{this.props.orders &&	(
						<Table
							pagination={false}
							columns={columns}
							dataSource={this.props.orders}
						/>
					)}
			</div>
		);
	}
}

const mapDispatchToProps = {
	getOrdersList,
	setOrderStatus
};

function mapStateToProps(state) {
	return {
		orders: state.orders,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
