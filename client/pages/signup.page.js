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
	get polisyCheckBox() { return $('span[aria-disabled="false"]') }
	get linkAgreement() { return $('a*=sagreement') } // //*/a[contains(text(), "Пользовательским соглашением")]
	get linkPolisy() { return $('a*=polisy') }		//  //*/a[contains(text(), "Политикой конфиденциальности")]
	get passwordTextHints() { return $$('//*[@id="app"]/div[2]/div[2]/form/div[5]/div') }
	get passwordHint() { return $('//*[@id="app"]/div[2]/div[2]/form/div[5]/div[5]/span/span') }
	get inputFieldErrors() { return $$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p') }
	get inputTelRequiredError() { return $('//*[@id="app"]/div[2]/div[2]/form/div[2]/span') }
	get inputOtpCode() { return $('input[name="code"]') };
	get inputOtpCodeError() { return $('//*[@id="app"]/div[3]/div[2]/form/div[1]/p') };
	get submitOtpCodeBtn() { return $('//*[@id="app"]/div[3]/div[2]/form/button') };
	get modalSuccess() { return $('//*[@id="app"]/div[3]/div[2]') };
	get modalSuccessTitle() { return $('//*[@id="app"]/div[3]/div[2]/h3') };
	get modalSuccessBtn() { return $('//*[@id="app"]/div[3]/div[2]/button') };

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