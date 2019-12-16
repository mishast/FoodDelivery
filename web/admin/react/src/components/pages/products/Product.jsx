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
		const editable = this.state.editable;
		const onEditEnable = this.enableEdit;
		const onEditDisable = this.disableEdit;

		if (this.props.productLoading || !this.props.product) {
			return (
				<React.Fragment>
					<div className="form">
						<React.Fragment>
							<div className='form-head'>
								<div className='form-title'>
									Product Loading...
								</div>
								<div className='form-space_between'>&nbsp;</div>
							</div>
							<div className='form-content'>&nbsp;</div>
							<div className='form-bottom'>&nbsp;</div>
						</React.Fragment>
					</div>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
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
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	getProduct,
};

function mapStateToProps(state) {
	return {
		productLoading: state.productLoading,
		product: state.product,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
