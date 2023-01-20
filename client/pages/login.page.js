import Page from './page.js';
import axios from 'axios';


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

	get logoImageBtn(){
		return $('a[href="/login"]');
	}

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
