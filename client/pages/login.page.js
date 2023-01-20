
import Page from './page.js';

class LoginPage extends Page {

	get inputUsername() {
		return $('input[name="username"]');
	}

	get inputPassword() {
		return $('input[name="password"]');
	}

	get btnSubmit() {
		return $('button[type="submit"]');
	}

	get forgotPassword() {
		return $('a[href="/forgot-password"]');
	}

	get loginForm() { return $('//*[@id="app"]//form') };
	get loginFormTitle() { return $('//*[@id="app"]//form/h3') };

	// a method to encapsule automation code to interact with the page
	// e.g. to login using username and password

	async login(username, password) {
		await this.inputUsername.setValue(username);
		await this.inputPassword.setValue(password);
		await this.btnSubmit.click();
	}


	// overwrite specific options to adapt it to page object

	open() {
		return super.open('login');
	}
}

export default new LoginPage();
