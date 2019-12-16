import { Button } from 'antd';
import React, { Component } from 'react';
import {getProduct} from "../../../actions";
import {connect} from "react-redux";
import ProductForm from './ProductForm';
import * as Yup from "yup";
import config from "../../../config";

class Product extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		editable: false
	};

	componentDidMount() {
		this.props.getProduct(this.props.productId);
	}


	enableEdit = () => {
			this.setState({
					editable: true
			});
	};

	disableEdit = () => {
		this.setState({
			editable: false
		});
		this.props.getProduct(this.props.productId);
	};

	render() {
		console.log(this.props.productId);
		if (this.props.product) {
			console.log(this.props.product);
		}

		const editable = this.state.editable;
		const onEditEnable = this.enableEdit;
		const onEditDisable = this.disableEdit;

		return (
			<React.Fragment>
				{ !this.props.product &&
					<div className="form">
						<React.Fragment>
							<div className='form-head'>
								<div className='form-title'>
									Product
								</div>
								<div className='form-space_between'>&nbsp;</div>
								{!editable &&
								<div className='form-toolbar'>
									<Button type="primary" onClick={onEditEnable}>Edit</Button>
								</div>
								}
							</div>
							<ProductForm product={this.props.product} editable={editable} />
							{editable &&
							<div className='form-bottom'>
								<Button type="primary">Submit</Button>
								<Button onClick={onEditDisable} style={{ marginLeft: '10px' }}>Cancel</Button>
							</div>
							}
						</React.Fragment>
					</div>
				}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getProduct,
};

function mapStateToProps(state) {
	return {
		product: state.product,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
