import getRandomEmail from "../../functions/getRandomEmail.js";
import { passwords, phoneNumbers } from "../../functions/helper.js";
import LoginPage from "../pages/login.page.js";
import SignUpPage from "../pages/signup.page.js";
import resources from "../resources/text.js";
import { expect as expectChai } from "chai";

describe('Элементы на странице регистрации', () => {

	it('Отображается форма регистрации с заголовком', async () => {
		await SignUpPage.open();
		await expect(SignUpPage.registerForm).toBeDisplayed();
		await expect(SignUpPage.registerFormTitle).toHaveText(resources.signUpFormTitle);
	});

	xit('Названия плейсхолдеров', async () => {
		await expect(SignUpPage.inputEmailPlcHld).toHaveText(resources.inputRegEmailPlcHld);
		await expect(SignUpPage.inputTelPlcHld).toHaveText(resources.inputRegTelPlcHld);
		await expect(SignUpPage.inputLoginPlcHld).toHaveText(resources.inputRegLoginPlcHld);
		await expect(SignUpPage.inputPassPlcHld).toHaveText(resources.inputRegPassPlcHld);
		await expect(SignUpPage.inputPassConfrmPlcHld).toHaveText(resources.inputRegPassConfrmPlcHld);
	});

	xit('Кнопка выбора языка и зночение по умолчанию', async () => {
		expectChai(await SignUpPage.ariaLocalization.getComputedRole()).to.equal('button');
		expectChai(await SignUpPage.ariaLocalization.getComputedLabel()).to.equal('RU');
	});

	xit('Кнопка выбора кода страны и зночение по умолчанию', async () => {
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedRole()).to.equal('button');
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedLabel()).to.equal('Ukraine: + 380');
	});

	xit('Дефолтное зночение поля телефон', async () => {
		expectChai(await SignUpPage.inputRegisterTel.getAttribute('value')).to.equal('+380');
	});

	xit('Отображается чек бокс политик', async () => {
		await expect(SignUpPage.polisyCheckBox).toBeDisplayed();
	});

	xit('Чек бокс политик отмечается', async () => {
		await SignUpPage.polisyCheckBox.click();
		await expect(SignUpPage.polisyCheckBox).toHaveElementClass('Mui-checked');
	});

	xit('Красная подсветка полей ввода', async () => {
		await SignUpPage.submitRegisterBtn.click();
		const errorBorders = await $$('fieldset[aria-hidden]');
		const errorColorEmail = await errorBorders[0].getCSSProperty('border-color');
		// const errorColorTelPlsHld = await SignUpPage.inputTelPlcHld.getCSSProperty('color'); ???
		const errorColorLogin = await errorBorders[1].getCSSProperty('border-color');
		const errorColorPass = await errorBorders[2].getCSSProperty('border-color');
		const errorColorPassConfrm = await errorBorders[3].getCSSProperty('border-color');
		expectChai(errorColorEmail.parsed.hex).to.equal('#e71216');
		expectChai(errorColorLogin.parsed.hex).to.equal('#e71216');
		expectChai(errorColorPass.parsed.hex).to.equal('#e71216');
		expectChai(errorColorPassConfrm.parsed.hex).to.equal('#e71216');
		// expectChai(errorColorTelPlsHld.parsed.hex).to.equal('#e71216'); ???
		// console.log(errorColorTelPlsHld);

	});

	xit('Отображаются подсказки по паролю', async () => {
		await SignUpPage.inputRegisterPassword.addValue('1');
		await expect(SignUpPage.passwordHints).toBeDisplayed();
		await expect(SignUpPage.passwordHints).toBeElementsArrayOfSize(5);
	});

	xit('Выбор кода телефона страны из списка', async () => {
		await SignUpPage.ariaCountryCodeTel.click();
		await SignUpPage.countryCodeItemTurey.click();
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedLabel()).to.equal('Turkey: + 90');
	});

	xit('Всплывающая подсказка по спец символам', async () => {
		await SignUpPage.specialSymbolsHint.moveTo();
		await expect(SignUpPage.symbolsHintClassAdd).toHaveAttribute('aria-describedby');
	});
});

xdescribe('Регистрация нового пользователя', () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.registerBtn.click();
	})

	it('Регистрации с валидными данными - до модалки ввода otp кода', async () => {
		await SignUpPage.signUp(getRandomEmail, phoneNumbers.getRandomEngPhoneNumber(),
			passwords.getRandomPassword(), passwords.getRandomPassword());
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

