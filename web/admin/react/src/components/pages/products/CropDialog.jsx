import { Modal } from 'antd';
import React, { Component } from 'react';
import UploadButton from "./UploadButton";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


class CropDialog extends Component {
	state = {
		selectImageVisible: false,
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

	fileSelected = (file) => {
		const reader = new FileReader();
		reader.addEventListener('load', () =>
			this.setState({ cropSrc: reader.result })
		);
		reader.readAsDataURL(file);
	};

	onSelect = () => {
		if (this.props.onSelect) {
			this.props.onSelect(this.state.croppedImageBlob, this.state.croppedImageUrl);
		}
	};

	// If you setState the crop in here you should return false.
	onImageLoaded = image => {
		this.imageRef = image;
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
			const croppedImage = await this.getCroppedImg(
				this.imageRef,
				crop,
				'newFile.jpeg'
			);

			this.setState({ croppedImageBlob: croppedImage.blob, croppedImageUrl: croppedImage.imageUrl });
		}
	}

	getCroppedImg(image, crop, fileName) {
		const needWidth = 330;
		const needHeight = 270;

		const canvas = document.createElement('canvas');
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		canvas.width = needWidth;
		canvas.height = needHeight;
		const ctx = canvas.getContext('2d');

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			needWidth,
			needHeight
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
				resolve({ blob, imageUrl: this.fileUrl});
			}, 'image/jpeg');
		});
	}

	render() {

		const { croppedImageUrl } = this.state;

		return (
					<Modal
						title="Select image"
						wrapClassName="cropImageModal"
						width="90vw"
						style={{ top: 20 }}
						visible={true}
						onOk={this.onSelect}
						onCancel={this.props.onCancel}
					>
						<div className="crop-wrapper">
							<div className="crop-wrapper-inner">
								<ReactCrop
									src={this.state.cropSrc}
									crop={this.state.crop}
									ruleOfThirds
									onImageLoaded={this.onImageLoaded}
									onComplete={this.onCropComplete}
									onChange={this.onCropChange}
								/>
							</div>
						</div>
						<UploadButton onFileSelected={this.fileSelected}/>
						<br />
						<p>Cropped image:</p>
						<div className="cropped-image-layout">
							<div className="cropped-image-wrapper">
								{croppedImageUrl && (
									<img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
								)}
							</div>
						</div>
					</Modal>
		);
	}
}

export default CropDialog;
