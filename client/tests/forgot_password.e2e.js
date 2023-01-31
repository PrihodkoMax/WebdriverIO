import LoginPage from '../pages/login.page.js';
import ForgotPasswordPage from '../pages/forgot_password.page.js';
import AllureReporter from '@wdio/allure-reporter';
import SignUpPage from '../pages/signup.page.js';
import { text_RU } from '../resources/text_RU.js';
import { text_EN } from '../resources/text_EN.js';
import { randoms } from '../../functions/randomData.js';

describe("Элементы на странице Востановление пароля", () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.forgotPassword.click();
	})

	it("Отображается форма востановления пароля", async () => {
		await expect(ForgotPasswordPage.form).toBeDisplayed();
		await expect(ForgotPasswordPage.formTitle)
			.toHaveText(text_RU.forgotPassFormTitle);
	});

	it('Отображаются две радио кнопки и по дефолту отмечена телефон', async () => {
		await expect(ForgotPasswordPage.radioButtons).toBeExisting();
		await expect(ForgotPasswordPage.radioButtons).toBeElementsArrayOfSize(2);
		await expect(ForgotPasswordPage.radioBtnTel).toBeChecked();
	});

	it('Отображается поле ввода Телефон и есть дефолтное значение', async () => {
		await expect(ForgotPasswordPage.inputTel).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTel).toHaveValue('+380');
	});

	it('Выбор радио кнопки Email и отображение поля Email', async () => {
		await ForgotPasswordPage.radioBtnEmail.click();
		await browser.pause(500);
		await expect(ForgotPasswordPage.inputEmail).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTel).not.toBeDisplayed();
	});

	it('- Востановление пароля с не заполненым полем Email', async () => {
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputEmailError).toBeDisplayed();
		await expect(ForgotPasswordPage.inputEmailError).toHaveText(text_RU.requiredFieldError);
	});

	it('- Востановление пароля с не заполненым полем Телефон', async () => {
		await ForgotPasswordPage.radioBtnTelLabel.click()
		await browser.pause(500);
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputTelError).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTelError).toHaveText(text_RU.requiredFieldError);
	});

	it('Смена языка на странице', async () => {
		await SignUpPage.ariaLocalization.click();
		await SignUpPage.listItemsLocal[2].click();
		await expect(ForgotPasswordPage.formTitle).toHaveText(text_EN.forgotPassFormTitle);
		await SignUpPage.listItemsLocal[1].click();
	});

	it('Возможность вернутся на страницу регистрации', async () => {
		await ForgotPasswordPage.backBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
		await expect(LoginPage.loginFormTitle).toHaveText(text_RU.signInFormTitle);
	});

});

describe('Востановление пароля - негативные кейсы', () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.forgotPassword.click();
	})

	it('Отображение ошибки после ввода кода (не валидный номер пользователя)', async () => {
		await ForgotPasswordPage.recoverPassbyTel(randoms.getRandomUaPhoneNumber().slice(4), text_RU.otpCodeForPassRecoverByTel);
		await expect(ForgotPasswordPage.inputOtpCodeError).toBeDisplayed();
		await expect(ForgotPasswordPage.inputOtpCodeError).toHaveText(text_RU.invalidCodeError);
	});

	it('Отображение ошибки после не ввода кода', async () => {
		await ForgotPasswordPage.closeCodeEnterFormBtn.click();
		await ForgotPasswordPage.submitBtn.click();
		await ForgotPasswordPage.submitOtpCodeBtn.click();
		await expect(ForgotPasswordPage.inputOtpCodeError).toHaveText(text_RU.requiredFieldError);
	});

	it('Отображение ошибки после ввода кода < 6 символов', async () => {
		await ForgotPasswordPage.closeCodeEnterFormBtn.click();
		await ForgotPasswordPage.submitBtn.click();
		await ForgotPasswordPage.inputOtpCode.addValue(randoms.getRandomUaPhoneNumber().slice(8));
		await ForgotPasswordPage.submitOtpCodeBtn.click();
		await expect(ForgotPasswordPage.inputOtpCodeError).toHaveText(text_RU.invalidLengthCodeError);
	});

	it('Отображение ошибки после не ввода email', async () => {
		await ForgotPasswordPage.closeCodeEnterFormBtn.click();
		await ForgotPasswordPage.radioBtnEmail.click();
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputEmailError).toHaveText(text_RU.requiredFieldError);
	});

	it('Отображение ошибки после ввода не валидного email', async () => {
		await ForgotPasswordPage.inputEmail.addValue(randoms.getRandomString());
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputEmailError).toHaveText(text_RU.invalidEmailError);
	});

});

describe('Востановление пароля', () => {

	it('Востановление пароля по Email', async () => {
		AllureReporter.addSeverity('critical');
		await LoginPage.open();
		await LoginPage.forgotPassword.click();
		await ForgotPasswordPage.radioBtnEmail.click();
		await ForgotPasswordPage.inputEmail.addValue(randoms.getRandomEmail());
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.modalSuccess).toBeDisplayed();
		await expect(ForgotPasswordPage.modalSuccessByEmailText).toHaveText(text_RU.successModalFPByEmailText);
	});

	it('Востановление пароля по номеру телефона', async () => {
		AllureReporter.addSeverity('critical');
		await ForgotPasswordPage.modalSuccessBtn.click();
		await LoginPage.forgotPassword.click();
		await ForgotPasswordPage.recoverPassbyTel(text_RU.validUserPhoneNum.slice(4), text_RU.otpCodeForPassRecoverByTel);
		await expect(ForgotPasswordPage.recoverPassForm).toBeDisplayed();
		await expect(ForgotPasswordPage.recoverPassFormTitle).toHaveText(text_RU.forgotPassFormTitle);
	});

	it('Ввод и подтверждение нового пароля', async () => {
		AllureReporter.addSeverity('critical');
		await ForgotPasswordPage.inputNewPassword.setValue(text_RU.validUserPassword);
		await ForgotPasswordPage.inputNewPasswordConfirm.setValue(text_RU.validUserPassword);
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.modalSuccess).toBeDisplayed();
		await expect(ForgotPasswordPage.modalSuccessByTelText).toHaveText(text_RU.successModalFPByTelText);
	});

	it('Возват на страницу регистрации', async () => {
		await ForgotPasswordPage.modalSuccessBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
	});
});

