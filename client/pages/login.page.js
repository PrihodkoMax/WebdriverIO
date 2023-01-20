<<<<<<< HEAD:client/pages/login.page.js

=======
>>>>>>> 8e7a2b56a70b441fc299ed3542121d44c4ed759f:test/pageobjects/login.page.js
import Page from './page.js';
import axios from 'axios';

<<<<<<< HEAD:client/pages/login.page.js
=======

>>>>>>> 8e7a2b56a70b441fc299ed3542121d44c4ed759f:test/pageobjects/login.page.js
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
	
	get statusCode(){
		return axios.get(this.LoginPage).then(response => response.status);
	}

<<<<<<< HEAD:client/pages/login.page.js
	get loginForm() { return $('//*[@id="app"]//form') };
	get loginFormTitle() { return $('//*[@id="app"]//form/h3') };
=======
	get logoImageBtn(){
		return $('a[href="/login"]');
	}
>>>>>>> 8e7a2b56a70b441fc299ed3542121d44c4ed759f:test/pageobjects/login.page.js

	async login(username, password) { // метод инкапсуляции кода автоматизации для взаимодействия со страницей
		await this.inputUsername.setValue(username);
		await this.inputPassword.setValue(password);
		await this.btnSubmit.click();
	}
	
	open() {
		return super.open('login');
	}
}
export default new LoginPage();
