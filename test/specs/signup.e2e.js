import SignUpPage from "../pageobjects/signup.page.js";

describe('Testing SignUp page functionality', () => {

	it('Доступны все поля формы', async () => {
		await SignUpPage.open();

		await expect(SignUpPage.inputRegisterEmail).toBeDisplayed();
		await expect(SignUpPage.inputRegisterTel).toBeDisplayed();
		await expect(SignUpPage.inputRegisterUsername).toBeDisplayed();
		await expect(SignUpPage.inputRegisterPassword).toBeDisplayed();
		await expect(SignUpPage.inputRegisterPasswordConfm).toBeDisplayed();
		await expect(SignUpPage.privacyLabel).toBeDisplayed();

	});

	// Не рабочий функционал!

	// it('Регистрация с валидными данными', () => {
	// 	SignUpPage.open();
	// 	SignUpPage.signUp('m.prykhodko+01auto@deltafunc.com',
	// 		'+15056673998', 'maxtest', 'Test#01');

	// 	expect($('//*/h3[contains(text(), "+ 15056673998")]')).toBeDisplayed();
	// });
});