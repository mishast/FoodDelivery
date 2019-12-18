import { Form, Input, Button, Modal } from 'antd';
import React, { Component } from 'react';
import {Formik, Field} from "formik";
import * as Yup from "yup";
import config from "../../../config";
import CropDialog from "./CropDialog";
import UploadButton from "./UploadButton";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


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
	state = {
		cropDialogVisible: false,
		cropSrc: null,
		crop: {
			unit: '%',
			width: 330,
			aspect: 330 / 270,

		},
	};

	constructor(props) {
		super(props);
	}

	showSelectImageDialog = () => {
		this.setState({cropDialogVisible: true})
	};

	imageSelect = (imageBlob, imageUrl) => {
		this.setState({imageBlob, imageUrl, cropDialogVisible: false})
	};

	imageSelectCancel = () => {
		this.setState({cropDialogVisible: false})
	};

	render() {
		const product = this.props.product;

		if (product) {
			console.log(product);
		}

		const editable = this.props.editable;

		let imageUrl = config.apiBaseUrl + 'files/' + product.image.id + '/' + product.image.filename;

		return (
							<Formik initialValues={product} enableReinitialize={true} keepDirtyOnReinitalize={false}>
							<div className='form-content'>
								<Form.Item label="Title">
									<Field as={Input} name='title' disabled={!editable} />
								</Form.Item>
								<Form.Item label="Description">
									<Field as={Input.TextArea} name='description' rows={5} disabled={!editable} />
								</Form.Item>
								<Form.Item label="Price">
									<Field as={Input} name='price' disabled={!editable} />
								</Form.Item>
								<Form.Item label="Image">
									<div class="productImageContainer">
										<img src={imageUrl} class="productImage" />
										{this.state.imageUrl &&
											<img src={this.state.imageUrl} className="productImage"/>
										}
									</div>
									<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>
								</Form.Item>
								{
									this.state.cropDialogVisible &&
									<CropDialog
										onSelect={this.imageSelect}
										onCancel={this.imageSelectCancel}
									/>
								}
							</div>
							</Formik>
		);
	}
}

export default ProductForm;
