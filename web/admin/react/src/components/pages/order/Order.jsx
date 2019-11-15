import { Table, Button } from 'antd';
import React, { Component } from 'react';
import {getOrders} from "../../../actions";
import {connect} from "react-redux";

class Orders extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState) {
	}

	render() {
		return (
			<React.Fragment>
				ORDER
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
