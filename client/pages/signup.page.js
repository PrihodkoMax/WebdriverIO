import Page from "./page.js";

class SignUpPage extends Page {

	get registerForm() { return $('form[action]') }
	get codeEnterForm() { return $('//*[@id="app"]/div[3]/div[2]') }
	get registerFormTitle() { return $('form[action] h3') }
	get submitRegisterBtn() { return $('button[type="submit"]') }
	get inputRegisterEmail() { return $('input[name="email"]') }
	get inputRegisterTel() { return $('input[type="tel"]') }
	get inputRegisterUsername() { return $('input[name="username"]') }
	get inputRegisterPassword() { return $('input[name="password"]') }
	get inputRegisterPasswordConfm() { return $('input[name="password_confirmation"]') }
	get polisyLabel() { return $('input[name="agreeWithPrivacy"]') }
	get polisyText() { return $('form label div ') }
	get polisyCheckBox() { return $('span[aria-disabled="false"]') }
	get linkAgreement() { return $('form a[href*="/sagreement"]') }
	get linkPolisy() { return $('form a[href*="/policy"]') }
	get passwordHints() { return $$('//*[@id="app"]/div[2]/div[2]/form/div[5]/div') }
	get symbolsHintClassAdd() { return $('//*[@id="app"]/div[2]/div[2]/form/div[5]/div[5]/span') }
	get specialSymbolsHint() { return $('form div div span span') }
	get inputFieldErrors() { return $$('//*[@id="app"]/div[2]/div[2]/form/div/p') }
	get inputTelRequiredError() { return $('//*[@id="app"]/div[2]/div[2]/form/div[2]/span') }
	get inputOtpCode() { return $('input[name="code"]') };
	get inputOtpCodeError() { return $('//*[@id="app"]/div[3]/div[2]/form/div[1]/p') }
	get submitOtpCodeBtn() { return $('//*[@id="app"]/div[3]/div[2]/form/button') }
	get modalSuccess() { return $('//*[@id="app"]/div[3]/div[2]') }
	get modalSuccessTitle() { return $('//*[@id="app"]/div[3]/div[2]/h3') }
	get modalSuccessBtn() { return $('//*[@id="app"]/div[3]/div[2]/button') }
	get showPassEye() { return $('//*[@id="app"]/div[2]/div[2]/form/div[4]/div/div') }
	get showPassConfrmEye() { return $('//*[@id="app"]/div[2]/div[2]/form/div[5]/div/div') }
	get enterBtn() { return $('body a button') }
	get inputEmailPlcHld() { return $('//form/div[1]/label') }
	get inputTelPlcHld() { return $('div.special-label') }
	get inputLoginPlcHld() { return $('//form/div[3]/label') }
	get inputPassPlcHld() { return $('//form/div[4]/label') }
	get inputPassConfrmPlcHld() { return $('//form/div[5]/label') }
	get ariaLocalization() { return $('//*[@id="mui-component-select-select"]') }
	get listLocal() { return $('ul[role="listbox"]') }
	get listItemsLocal() { return $$('li[role="option"]') }
	get ariaCountryCodeTel() { return $('div.selected-flag') }
	get countryCodeItemTurey() { return $('li[data-flag-key="flag_no_194"]') }

	async signUp(email, tel, username, password) {
		await this.inputRegisterEmail.setValue(email);
		await this.inputRegisterTel.setValue(tel);
		await this.inputRegisterUsername.setValue(username);
		await this.inputRegisterPassword.setValue(password);
		await this.inputRegisterPasswordConfm.setValue(password);
		await this.polisyLabel.click();
		browser.pause(500);
		await this.submitRegisterBtn.click();
	}

	open() {
		return super.open('register');
	}
}

export default new SignUpPage();