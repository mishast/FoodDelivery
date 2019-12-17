import { Form, Input, Button, Modal } from 'antd';
import React, { Component } from 'react';
import {Formik, Field} from "formik";
import * as Yup from "yup";
import config from "../../../config";
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
		selectImageVisible: false,
		cropSrc: null,
		crop: {
			unit: '%',
			width: 330,
			aspect: 330 / 270,

		}
	};

	constructor(props) {
		super(props);
	}

	showSelectImageDialog = () => {
		this.setState({selectImageVisible: true})
	};

	imageSelected = () => {
		this.setState({selectImageVisible: false})
	};

	imageSelectCanceled = () => {
		this.setState({selectImageVisible: false})
	};

	fileSelected = (file) => {
		const reader = new FileReader();
		reader.addEventListener('load', () =>
			this.setState({ cropSrc: reader.result })
		);
		reader.readAsDataURL(file);
	};

	// If you setState the crop in here you should return false.
	onImageLoaded = image => {
	};

	onCropComplete = crop => {
		this.makeClientCrop(crop);
	};

	onCropChange = (crop, percentCrop) => {
		// You could also use percentCrop:
		// this.setState({ crop: percentCrop });
		this.setState({ crop });
	};

	async makeClientCrop(crop) {
		if (this.imageRef && crop.width && crop.height) {
			const croppedImageUrl = await this.getCroppedImg(
				this.imageRef,
				crop,
				'newFile.jpeg'
			);
			this.setState({ croppedImageUrl });
		}
	}

	getCroppedImg(image, crop, fileName) {
		const canvas = document.createElement('canvas');
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = crop.width;
		canvas.height = crop.height;
		const ctx = canvas.getContext('2d');

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width,
			crop.height
		);

		return new Promise((resolve, reject) => {
			canvas.toBlob(blob => {
				if (!blob) {
					//reject(new Error('Canvas is empty'));
					console.error('Canvas is empty');
					return;
				}
				blob.name = fileName;
				window.URL.revokeObjectURL(this.fileUrl);
				this.fileUrl = window.URL.createObjectURL(blob);
				resolve(this.fileUrl);
			}, 'image/jpeg');
		});
	}

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
									</div>
									<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>
								</Form.Item>
								<Modal
									title="Select image"
									wrapClassName="cropImageModal"
									width="90vw"
									visible={this.state.selectImageVisible}
									onOk={this.imageSelected}
									onCancel={this.imageSelectCanceled}
								>

									<div className="cropContainer">
									<ReactCrop
										src={this.state.cropSrc}
										crop={this.state.crop}
										ruleOfThirds
										onImageLoaded={this.onImageLoaded}
										onComplete={this.onCropComplete}
										onChange={this.onCropChange}
										imageStyle={{maxHeight: '350px'}}
									/>
									</div>
									<UploadButton onSelected={this.fileSelected}/>
								</Modal>
							</div>
							</Formik>
		);
	}
}

export default ProductForm;
