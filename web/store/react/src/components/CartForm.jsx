import { Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux'

class Cart extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="cartTitle">Your contact data</div>
				<div className="cartFormContainer">
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={values => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form onSubmit={handleSubmit}>
									<div>
										<label>How we should call you</label>
										<input name="customerName" type="text" />
									</div>
									<div>
										<label>Your phone number</label>
										<input name="customerPhone" type="text" />
									</div>
									<div>
										<label>Your Address</label>
										<textarea name="customerAddress" rows={3} />
									</div>
									<div>
										<label>If you want to leave a comment for us, enter it below</label>
										<textarea name="customerComment" rows={3} />
									</div>
									<div className="completeOrderButtonContainer">
										<button className="completeOrderButton">Complete order</button>
									</div>
								</form>
							)}
					</Formik>
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(Cart)
