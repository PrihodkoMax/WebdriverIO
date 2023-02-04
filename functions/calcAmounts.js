function calcChargeAmountFiat(transferAmount, percent, fix = 0) {
	if (transferAmount > 0 && percent >= 0 && typeof transferAmount === 'number' && typeof percent === 'number') {
		const chargeAmount = (transferAmount / ((100 - percent) / 100)) + fix;
		return Math.ceil(chargeAmount * 100) / 100;
	} else {
		console.log('Amount or tariff value is not a positive number');
	}
}

function calcChargeAmountCrypto(transferAmount, percent, fix = 0) {
	if (transferAmount > 0 && percent >= 0 && typeof transferAmount === 'number' && typeof percent === 'number') {
		const chargeAmount = (transferAmount / ((100 - percent) / 100)) + fix;
		return Math.ceil(chargeAmount * 100000000) / 100000000;
	} else {
		console.log('Amount or tariff value is not a positive number');
	}
}

function calcTransferAmountFiat(chargeAmount, percent, fix = 0) {
	if (chargeAmount > 0 && percent >= 0 && typeof chargeAmount === 'number' && typeof percent === 'number') {
		const transferAmount = (chargeAmount * ((100 - percent) / 100)) - fix;
		return Math.floor(transferAmount * 100) / 100;
	} else {
		console.log('Amount or tariff value is not a positive number');
	}
}

function calcTransferAmountCrypto(chargeAmount, percent, fix = 0) {
	if (chargeAmount > 0 && percent >= 0 && typeof chargeAmount === 'number' && typeof percent === 'number') {
		const transferAmount = (chargeAmount * ((100 - percent) / 100)) - fix;
		return Math.floor(transferAmount * 100000000) / 100000000;
	} else {
		console.log('Amount or tariff value is not a positive number');
	}
}

// console.log(calcChargeAmountFiat(525, 0.02, 10));
// console.log(calcChargeAmountCrypto(525, 0.02, 10));
// console.log(calcTransferAmountFiat(525, 0.02, 10));
// console.log(calcTransferAmountCrypto(5255.2324565, 0.2, 10));
