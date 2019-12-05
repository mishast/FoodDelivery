import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import {getOrder} from "../../../actions";
import {connect} from "react-redux";
import {Formik, withFormik} from "formik";
import * as Yup from "yup";

const OrderForm = props => {
	const {
		onEditEnable,
		onEditDisable,
		editable,
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
	} = props;
	return (
		<div className="form">
			<React.Fragment>
				<div className='form-head'>
					<div className='form-title'>
						Order
					</div>
					<div className='form-space_between'>&nbsp;</div>
					{!editable &&
					<div className='form-toolbar'>
						<Button type="primary" onClick={onEditEnable}>Edit</Button>
					</div>
					}
				</div>
				<div className='form-content'>
					<Form.Item label="Name">
						<Input name='name' onChange={handleChange} onBlur={handleBlur} value={values.name} disabled={!editable} />
					</Form.Item>
					<Form.Item label="Phone">
						<Input name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone} disabled={!editable} />
					</Form.Item>
					<Form.Item label="Address">
						<Input.TextArea name='address' rows={5} onChange={handleChange} onBlur={handleBlur} value={values.address} disabled={!editable} />
					</Form.Item>
					<Form.Item label="Client's comment">
						<Input.TextArea name='comment' rows={5} onChange={handleChange} onBlur={handleBlur} value={values.comment} disabled={!editable} />
					</Form.Item>
					<Form.Item label="Our comment">
						<Input.TextArea name='comment' rows={5} onChange={handleChange} onBlur={handleBlur} value={values.comment} disabled={!editable} />
					</Form.Item>
				</div>
				{editable &&
				<div className='form-bottom'>
					<Button type="primary">Submit</Button>
					<Button onClick={onEditDisable} style={{ marginLeft: '10px' }}>Cancel</Button>
				</div>
				}
			</React.Fragment>
		</div>
	);
};

const OrderFormikForm = withFormik({
	mapPropsToValues: props => {
		return (props.order);
	}
})(OrderForm);

class Orders extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		editable: false
	};

	componentDidMount() {
		this.props.getOrder(this.props.orderId);
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
			this.props.getOrder(this.props.orderId);
	};


      render() {
          console.log(this.props.orderId);
          if (this.props.order) {
              console.log(this.props.order.items);
          }

          return (
          	<React.Fragment>
						{ this.props.order &&
              <OrderFormikForm
                  order={{name: 'name1', address: 'address1', phone: '1234567', comment: 'comment1'}}
									onEditEnable={this.enableEdit} onEditDisable={this.disableEdit}
							/>
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
