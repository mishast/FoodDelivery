import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {connect} from "react-redux";
import {getProducts} from "../../../actions";

class ListProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: null
		};
	}

	componentDidMount() {
		this.props.getProducts();
	}

	render() {
		console.log('Render list products!');
		console.log(this.props.products);

		let columns = [
			{
				title: "Title",
				dataIndex: "title"
			},
			{
				title: "Description",
				dataIndex: "description"
			},
			{
				title: "Price",
				dataIndex: "price"
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
				{this.props.products && (
					<Table
						pagination={false}
						columns={columns}
						dataSource={this.props.products}
					/>
				)}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getProducts,
};

function mapStateToProps(state) {
	return {
		products: state.products,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
