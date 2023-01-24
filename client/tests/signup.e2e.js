import getRandomEmail from "../../functions/getRandomEmail.js";
import { password, phoneNumbers, randomStrings } from "../../functions/helper.js";
import LoginPage from "../pages/login.page.js";
import SignUpPage from "../pages/signup.page.js";
import resources from "../resources/text.js";

describe('Элементы на странице регистрации', () => {

	it('Отображается форма регистрации с заголовком', async () => {
		await SignUpPage.open();
		await expect(SignUpPage.registerForm).toBeDisplayed();
		await expect(SignUpPage.registerFormTitle).toHaveText(resources.signUpFormTitle);
	});

	it('Отображается 5 полей ввода', async () => {
		const inputFields = await $$('form div.jss31');
		await expect(inputFields).toBeElementsArrayOfSize(5);
	});

	it('Отображается чек бокс политик', async () => {
		await expect(SignUpPage.polisyCheckBox).toBeDisplayed();
	});

	it('Чек бокс политик отмечается', async () => {
		await SignUpPage.polisyCheckBox.click();
		await expect(SignUpPage.polisyCheckBox).toHaveElementClass('Mui-checked');
	});

});

describe('Регистрация нового пользователя', () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.registerBtn.click();
	})

	it('Регистрации с валидными данными - до модалки ввода otp кода', async () => {
		await SignUpPage.signUp(getRandomEmail, phoneNumbers.getRandomEngPhoneNumber(),
			password.getRandomPassword(), password.getRandomPassword());
		await expect(SignUpPage.codeEnterForm).toBeDisplayed();
	});

	it('Регистрации с валидными данными - ввод otp кода', async () => {
		await SignUpPage.inputOtpCode.waitForDisplayed();
		await SignUpPage.inputOtpCode.addValue(resources.otpCodeForPassRecoverByTel);
		await SignUpPage.submitOtpCodeBtn.click();
		await expect(SignUpPage.modalSuccess).toBeDisplayed();
		await expect(SignUpPage.modalSuccessTitle).toHaveText(resources.successModalSignUpText);
	});

	it('Возврат на страницу регистрации', async () => {
		await SignUpPage.modalSuccessBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
	});
});
