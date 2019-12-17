import { Upload, Button, Icon } from 'antd';
import React, { Component } from "react";

class UploadButton extends Component {
	beforeUpload = (file) => {
		if (this.props.onSelected) {
			this.props.onSelected(file);
		}

		return false;
	};

	render() {
		return (
			<Upload beforeUpload={this.beforeUpload}>
				<Button>
					<Icon type="upload" /> Select file
				</Button>
			</Upload>
		);
	}
}

export default UploadButton;
