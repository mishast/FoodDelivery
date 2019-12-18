import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {connect} from "react-redux";
import {getProductsList} from "../../../actions";
import {Link} from "react-router-dom";

class ListProducts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: null
		};
	}

	componentDidMount() {
		this.props.getProductsList();
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
						<Link to={`/admin/products/${record._id}`}><Button>Edit</Button></Link>&nbsp;&nbsp;
						<Button>Delete</Button>
					</div>
				)
			}
		];

		return (
			<div className="content">

				{this.props.products && (
					<Table
						pagination={false}
						columns={columns}
						dataSource={this.props.products}
					/>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = {
	getProductsList,
};

function mapStateToProps(state) {
	return {
		products: state.products,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);
