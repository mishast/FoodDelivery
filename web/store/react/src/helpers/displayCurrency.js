function displayCurrency(value) {
	const floatValue = parseFloat(value);
	return floatValue.toFixed(2);
}

export default displayCurrency;
