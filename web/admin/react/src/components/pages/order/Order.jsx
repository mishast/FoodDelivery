import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import {getOrder} from "../../../actions";
import {connect} from "react-redux";
import {Formik, Field} from "formik";
import * as Yup from "yup";

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

          const editable = this.state.editable;
          const onEditEnable = this.enableEdit;
					const onEditDisable = this.disableEdit;

          return (
          	<React.Fragment>
						{ this.props.order &&
							<Formik initialValues={{name: 'name2', address: 'address2', phone: '12345678', comment: 'comment2'}}>
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
												<Field as={Input} name='name' disabled={!editable} />
											</Form.Item>
											<Form.Item label="Phone">
												<Field as={Input} name='phone' disabled={!editable} />
											</Form.Item>
											<Form.Item label="Address">
												<Field as={Input.TextArea} name='address' rows={5} disabled={!editable} />
											</Form.Item>
											<Form.Item label="Client's comment">
												<Field as={Input.TextArea} name='comment' rows={5} disabled={!editable} />
											</Form.Item>
											<Form.Item label="Our comment">
												<Field as={Input.TextArea} name='comment' rows={5} disabled={!editable} />
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
							</Formik>
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
