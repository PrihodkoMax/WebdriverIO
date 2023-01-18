import LoginPage from '../pageobjects/login.page.js';
import ForgotPasswordPage from '../pageobjects/forgot_password.page.js';
import resources from '../resources/index.js';

describe("Forgot password", () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.forgotPassword.click();
	})

	it("Forgot password modal window displays", async () => {
		await expect(ForgotPasswordPage.form).toBeDisplayed();
		await expect(ForgotPasswordPage.formTitle)
			.toHaveText(resources.forgotPassFormTitle);
	});

	it('Radio buttons displayed and tel default checked', async () => {
		await expect(ForgotPasswordPage.radioButtons).toBeExisting();
		await expect(ForgotPasswordPage.radioButtons).toBeElementsArrayOfSize(2);
		await expect(ForgotPasswordPage.radioBtnTel).toBeChecked();
	});

	it('Tel input field displayed and has default value', async () => {
		await expect(ForgotPasswordPage.inputTel).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTel).toHaveValue('+380');
	});

	it('Check Email radio button', async () => {
		await ForgotPasswordPage.radioBtnEmail.click();
		await browser.pause(500);
		await expect(ForgotPasswordPage.inputEmail).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTel).not.toBeDisplayed();
	});

	it('- Password recovery with empty Email input field', async () => {
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputEmailError).toBeDisplayed();
		await expect(ForgotPasswordPage.inputEmailError).toHaveText(resources.requiredFieldError);
	});

	it('- Password recovery with empty Tel input field', async () => {
		await ForgotPasswordPage.radioBtnTelLabel.click()
		await browser.pause(500);
		await ForgotPasswordPage.submitBtn.click();
		await expect(ForgotPasswordPage.inputTelError).toBeDisplayed();
		await expect(ForgotPasswordPage.inputTelError).toHaveText(resources.requiredFieldError);
	});

	it('Checking go back to login page', async () => {
		await ForgotPasswordPage.backBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
		await expect(LoginPage.loginFormTitle).toHaveText(resources.signInFormTitle);
	});
});
