import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { connect } from 'react-redux';
import { setMobile } from '../../actions';
import { withRouter } from "react-router";

class MobileDetector extends Component {

	throttledHandleWindowResize = () => {
		return throttle(() => {
			const isMobile = window.innerWidth < 992;

				this.props.setMobile(isMobile);
		}, 200);
	};

	componentDidMount() {
		window.addEventListener('resize', this.throttledHandleWindowResize());
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.throttledHandleWindowResize());
	}

	render() {
		return this.props.children ? this.props.children : null;
	}
}

const mapDispatchToProps = {
	setMobile
};

export default withRouter(connect(null, mapDispatchToProps)(MobileDetector));
