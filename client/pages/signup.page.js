import Page from "./page.js";

class SignUpPage extends Page {

	get registerForm() {
		return $('form.jss29');
	}

	get inputRegisterEmail() {
		return $('input[name="email"]');
	}

	get inputRegisterTel() {
		return $('input[type="tel"]');
	}

	get inputRegisterUsername() {
		return $('input[name="username"]');
	}

	get inputRegisterPassword() {
		return $('input[name="password"]');
	}

	get inputRegisterPasswordConfm() {
		return $('input[name="password_confirmation"]');
	}

	get privacyLabel() {
		return $('input[name="agreeWithPrivacy"]');
	}

	get btnRegisterSubmit() {
		return $('button[type="submit"]');
	}

	// get btnEnter() {
	// 	return $('//*[@id="app"]/div[2]/div[1]/div/a/button');
	// }

	async signUp(email, tel, username, password) {
		await this.inputRegisterEmail.setValue(email);
		await this.inputRegisterTel.setValue(tel);
		await this.inputRegisterUsername.setValue(username);
		await this.inputRegisterPassword.setValue(password);
		await this.inputRegisterPasswordConfm.setValue(password);
		await this.privacyLabel.click();
		// await this.btnRegisterSubmit.click();
	}

	open() {
		return super.open('register');
	}
}

export default new SignUpPage();