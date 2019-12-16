import { Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import {Formik, Field} from "formik";
import * as Yup from "yup";


class ProductFormInner extends Component {
	render() {
		return (
			<div className='form-content'>
				<div>{this.props.product.title}</div>
				<Form.Item label="Title">
					<Field as={Input} name='title' disabled={!editable} />
				</Form.Item>
				<Form.Item label="Description">
					<Field as={Input.TextArea} name='description' rows={5} disabled={!editable} />
				</Form.Item>
				<Form.Item label="Price">
					<Field as={Input} name='price' disabled={!editable} />
				</Form.Item>
			</div>
		);
	}
}

class ProductForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('ProductForm::render()');
		if (this.props.product) {
			console.log(this.props.product);
		}

		const editable = this.props.editable;

		return (
							<Formik initialValues={this.props.product} enableReinitialize={true} keepDirtyOnReinitalize={false}>
							<div className='form-content'>
								<div>{this.props.product.title}</div>
								<Form.Item label="Title">
									<Field as={Input} name='title' disabled={!editable} />
								</Form.Item>
								<Form.Item label="Description">
									<Field as={Input.TextArea} name='description' rows={5} disabled={!editable} />
								</Form.Item>
								<Form.Item label="Price">
									<Field as={Input} name='price' disabled={!editable} />
								</Form.Item>
							</div>
							</Formik>
		);
	}
}

export default ProductForm;
