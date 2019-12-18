import { Button, Icon } from 'antd';
import React, { Component } from "react";

class UploadButton extends Component {
	constructor(props) {
		super(props);
		this.fileInputRef = React.createRef();
	}

	handleSelect = () => {
		const el = this.fileInputRef.current;
		if (!el) {
			return;
		}
		el.click();
	};

	handleChange = e => {
		const files = e.target.files;

		if (files.length === 1) {
			if (this.props.onFileSelected) {
				this.props.onFileSelected(files[0]);
			}
		}
	};

	render() {
		return (
			<React.Fragment>
				<input
					type="file"
					ref={this.fileInputRef}
					style={{'display': 'none'}}
					accept="image/*"
					multiple={false}
					onChange={this.handleChange}
				/>
				<Button className="upload-button" type="primary" onClick={this.handleSelect}>
					<Icon type="upload" /> Select file...
				</Button>
			</React.Fragment>
		);
	}
}

export default UploadButton;
