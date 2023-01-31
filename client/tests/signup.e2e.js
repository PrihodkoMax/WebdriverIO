import { randoms } from "../../functions/randomData.js";
import LoginPage from "../pages/login.page.js";
import SignUpPage from "../pages/signup.page.js";
import { text_RU } from '../resources/text_RU.js';
import { text_EN } from '../resources/text_EN.js';
import { expect as expectChai } from "chai";
import AllureReporter from '@wdio/allure-reporter';

describe('Элементы на странице регистрации', () => {

	it('Отображается форма регистрации с заголовком', async () => {
		await SignUpPage.open();
		await expect(SignUpPage.registerForm).toBeDisplayed();
		await expect(SignUpPage.registerFormTitle).toHaveText(text_RU.signUpFormTitle);
	});

	it('Названия плейсхолдеров', async () => {
		await expect(SignUpPage.inputEmailPlcHld).toHaveText(text_RU.inputRegEmailPlcHld);
		await expect(SignUpPage.inputTelPlcHld).toHaveText(text_RU.inputRegTelPlcHld);
		await expect(SignUpPage.inputLoginPlcHld).toHaveText(text_RU.inputRegLoginPlcHld);
		await expect(SignUpPage.inputPassPlcHld).toHaveText(text_RU.inputRegPassPlcHld);
		await expect(SignUpPage.inputPassConfrmPlcHld).toHaveText(text_RU.inputRegPassConfrmPlcHld);
	});

	it('Кнопка выбора языка и значение по умолчанию', async () => {
		expectChai(await SignUpPage.ariaLocalization.getComputedRole()).to.equal('button');
		expectChai(await SignUpPage.ariaLocalization.getComputedLabel()).to.equal('RU');
	});

	it('Кнопка выбора кода страны и зночение по умолчанию', async () => {
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedRole()).to.equal('button');
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedLabel()).to.equal('Ukraine: + 380');
	});

	it('Дефолтное зночение поля телефон', async () => {
		expectChai(await SignUpPage.inputRegisterTel.getAttribute('value')).to.equal('+380');
	});

	it('Отображается чек бокс политик', async () => {
		await expect(SignUpPage.polisyCheckBox).toBeDisplayed();
	});

	it('Чек бокс политик отмечается', async () => {
		await SignUpPage.polisyCheckBox.click();
		await expect(SignUpPage.polisyCheckBox).toHaveElementClass('Mui-checked');
	});

	it('Выбор кода телефона страны из списка', async () => {
		await SignUpPage.ariaCountryCodeTel.click();
		await SignUpPage.countryCodeItemTurey.click();
		expectChai(await SignUpPage.ariaCountryCodeTel.getComputedLabel()).to.equal('Turkey: + 90');
	});

	it('Показ пароля в полях ввода пароля и подтверждения пароля', async () => {
		await SignUpPage.showPassEye.click();
		await SignUpPage.showPassConfrmEye.click();
		await expect(SignUpPage.inputRegisterPassword).toHaveAttribute('type', 'text');
		await expect(SignUpPage.inputRegisterPasswordConfm).toHaveAttribute('type', 'text');
	});

	it('Ссылки политик', async () => {
		await SignUpPage.open();
		await expect(SignUpPage.linkPolisy).toHaveAttr('href', 'https://funcwallet.com/ru/policy');
		await expect(SignUpPage.linkPolisy).toHaveAttr('target', '_blank');
		await expect(SignUpPage.linkPolisy).toHaveText(text_RU.linkPolicyText);
		await expect(SignUpPage.linkAgreement).toHaveAttr('href', 'https://funcwallet.com/ru/sagreement');
		await expect(SignUpPage.linkAgreement).toHaveText(text_RU.linkAgreementText);
		await expect(SignUpPage.linkAgreement).toHaveAttr('target', '_blank');
	});

	it('Отображаются подсказки по паролю', async () => {
		await SignUpPage.inputRegisterPassword.addValue('1');
		await expect(SignUpPage.passwordHints).toBeDisplayed();
		await expect(SignUpPage.passwordHints).toBeElementsArrayOfSize(5);
	});

	it('Всплывающая подсказка по спец символам', async () => {
		await SignUpPage.specialSymbolsHint.moveTo();
		await expect(SignUpPage.symbolsHintClassAdd).toHaveAttribute('aria-describedby');
	});

	it('Список доступных языков', async () => {
		await SignUpPage.ariaLocalization.click();
		await expect(SignUpPage.listLocal).toBeDisplayed();

		const arr = await SignUpPage.listItemsLocal;
		expect(arr).toBeElementsArrayOfSize(3);
		let newArr = [];
		for (let item of arr) {
			newArr.push(await item.getComputedLabel())
		}
		expectChai(newArr.toString()).to.equal(text_RU.langArray);
	});

	it('Возможность сменить язык', async () => {
		await SignUpPage.listItemsLocal[2].click();
		await expect(SignUpPage.registerFormTitle).toHaveText(text_EN.signUpFormTitle);
		await SignUpPage.listItemsLocal[1].click();
	});

	it('Красная подсветка полей ввода после ошибки', async () => {
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

	it('Переход на страницу авторизации', async () => {
		await SignUpPage.enterBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
	});
});

describe('Регистрация пользователя - негативные кейсы', () => {

	beforeEach(async () => {
		await SignUpPage.open();
	})

	it('Регистрация с не валидным Email', async () => {
		await SignUpPage.signUp('t@t.te', randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword());
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.invalidEmailErrorBE);
	});

	it('Регистрация с уже существующим Email', async () => {
		AllureReporter.addSeverity('critical');
		await SignUpPage.signUp(text_RU.validUserEmail, randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword());
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.existEmailError);
	});

	it('Регистрация с не валидным телефоном', async () => {
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomUsaPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword());
		await expect(SignUpPage.inputTelRequiredError).toHaveText(text_RU.invalidPhoneNumError);
	});

	it('Регистрация с уже существующим телефоном', async () => {
		AllureReporter.addSeverity('critical');
		await SignUpPage.signUp(randoms.getRandomEmail(), text_RU.validUserPhoneNum.slice(4),
			randoms.getRandomString(), randoms.getRandomPassword());
		await expect(SignUpPage.inputTelRequiredError).toHaveText(text_RU.existPhoneNumError);
	});

	it('Регистрация с уже существующим именем пользователя', async () => {
		AllureReporter.addSeverity('critical');
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			'Maksym QA', randoms.getRandomPassword());
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.existUsernameError);
	});

	it('Регистрация - имя пользователя < минимального значения', async () => {
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(5), randoms.getRandomPassword());
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.minLengthError6);
	});

	it('Регистрация - имя пользователя > максимального значения', async () => {
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(51), randoms.getRandomPassword());
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.maxLengthError50);
	});

	it('Регистрация - пароль < минимального значения', async () => {
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword(1));
		await expect(SignUpPage.inputFieldErrors[0]).toHaveText(text_RU.minLengthError8);
		await expect(SignUpPage.inputFieldErrors[1]).toHaveText(text_RU.minLengthError8);
	});

	it('Регистрация - пароль > максимального значения', async () => {
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword(8));
		await expect(SignUpPage.inputFieldErrors[0]).toHaveText(text_RU.maxLengthError60);
		await expect(SignUpPage.inputFieldErrors[1]).toHaveText(text_RU.maxLengthError60);
	});

	it('Регистрация - пароли не совпадают', async () => {
		await SignUpPage.inputRegisterEmail.setValue(randoms.getRandomEmail());
		await SignUpPage.inputRegisterTel.setValue(randoms.getRandomEngPhoneNumber());
		await SignUpPage.inputRegisterUsername.setValue(randoms.getRandomString());
		await SignUpPage.inputRegisterPassword.setValue(randoms.getRandomPassword(3));
		await SignUpPage.inputRegisterPasswordConfm.setValue(randoms.getRandomPassword());
		await SignUpPage.polisyLabel.click();
		await SignUpPage.submitRegisterBtn.click();
		await expect(SignUpPage.inputFieldErrors).toHaveText(text_RU.inputPassConfError);
	});
});

xdescribe('Регистрация нового пользователя', () => {

	before(async () => {
		await LoginPage.open();
		await LoginPage.registerBtn.click();
	})

	it('Регистрации с валидными данными - до модалки ввода otp кода', async () => {
		AllureReporter.addSeverity('blocker');
		await SignUpPage.signUp(randoms.getRandomEmail(), randoms.getRandomEngPhoneNumber(),
			randoms.getRandomString(), randoms.getRandomPassword());
		await expect(SignUpPage.codeEnterForm).toBeDisplayed();
	});

	it('Регистрации с валидными данными - ввод otp кода', async () => {
		AllureReporter.addSeverity('blocker');
		await SignUpPage.inputOtpCode.waitForDisplayed();
		await SignUpPage.inputOtpCode.addValue(text_RU.otpCodeForPassRecoverByTel);
		await SignUpPage.submitOtpCodeBtn.click();
		await expect(SignUpPage.modalSuccess).toBeDisplayed();
		await expect(SignUpPage.modalSuccessTitle).toHaveText(text_RU.successModalSignUpText);
	});

	it('Возврат на страницу регистрации', async () => {
		await SignUpPage.modalSuccessBtn.click();
		await expect(LoginPage.loginForm).toBeDisplayed();
	});
});
