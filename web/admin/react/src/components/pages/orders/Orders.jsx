import { Table, Button } from 'antd';
import React, { Component } from 'react';

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orders: []
		};
	}

	componentDidMount() {
		let orders = [
			{
				"key": "1111",
				"Product": "Tomato soup",
				"Client": "Andrew Pevkin",
				"Phone": "+12322323",
				"OrderState": this.props.orderState,
				"Address": "New york"
			},
			{
				"key": "2222",
				"Product": "Pizza",
				"Client": "Andrew Pevkin",
				"Phone": "+12322323",
				"OrderState": this.props.orderState,
				"Address": "New york"
			}
		];

		this.setState({
			orders: orders
		});
	}

	render() {
		let columns = [
			{
				title: "KEY",
				dataIndex: "key"
			},
			{
				title: "Product",
				dataIndex: "Product"
			},
			{
				title: "Client",
				dataIndex: "Client"
			},
			{
				title: "Phone",
				dataIndex: "Phone"
			},
			{
				title: "Action",
				render: (text, record) => (
					<div>
						<Button>Verify</Button>&nbsp;&nbsp;
						<Button>Decline</Button>
					</div>
				)
			}
		];

		return (
				<React.Fragment>
					<Table
						pagination={false}
						columns={columns}
						dataSource={this.state.orders}
					/>
				</React.Fragment>
		);
	}
}

export default Orders;
