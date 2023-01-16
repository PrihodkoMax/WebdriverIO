import SignUpPage from "../pageobjects/signup.page.js";

describe('Checking the presence of elements on the registration page', () => {

	it('Displaying a form with the correct name', async () => {
		await SignUpPage.open();

		await expect(SignUpPage.registerForm).toBeDisplayed();
		const registerFormTitle = await $('form h3');
		await expect(registerFormTitle).toHaveText('Начните использование FuncWallet');
	});

	it('Displaying five input fields', async () => {
		const inputFields = await $$('form div.jss31');
		await expect(inputFields).toBeElementsArrayOfSize(5);
	});

	it('Displaying disabled policy checkbox and ability to check it', async () => {
		const policyCheckbox = await $('span[aria-disabled="false"]');
		await expect(policyCheckbox).toBeDisplayed();

		await policyCheckbox.click();
		await expect(policyCheckbox).toHaveElementClass('Mui-checked');
	});

	// 	await expect($('//span[contains(text(), "Поле обязательно к заполнению")]')).toBeDisplayed();
	// 	// await expect($('//p[contains(text(), "Поле обязательно к заполнению")]')).toBeDisplayed();

});

