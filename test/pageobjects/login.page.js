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

	// метод инкапсуляции кода автоматизации для взаимодействия со страницей
	
	async login(username, password) {
		await this.inputUsername.setValue(username);
		await this.inputPassword.setValue(password);
		await this.btnSubmit.click();
	}
	
	open() {
		return super.open('login');
	}

	// Создаем асинхроную функцию для получения статус кода 
	
	async getStatusCode(status, _headers) {	
		
		try {  
		const response = await axios.get('https://account.staging.mono.tod.sh/login/');
		const status = response.status;
		
		if (status === 200) {
			return console.log(`Responce was successful. Status code: ${response.status}`);
		} else {
		return console.log(`Responce failed. Status code: ${response.status}`);
		}
		
	} 
		catch (error) {
		console.error(error);
	}
		return await status;
}
	
async  postStatusCode(username,password,status) {
	try{
	await fetch ('https://api.staging.mono.tod.sh/api/v1/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain',
			'Content-Type': 'application/json',
			'cache-control': 'no-cache, private',
			'access-control-allow-credentials': 'true',
			'access-control-allow-origin': 'https://account.staging.mono.tod.sh'
		},
	
	   body: JSON.stringify({ username, password }) 
	  
	})
	return status = responce.status
	} 
  catch (error) {
	console.error(error);
	}
	if (status === 401) {
	return console.log(`Request was successful. Status code: ${status}`);
  } else {
	return console.log(`Request failed. Status code: ${status}`);
	}
  }
}
export default new LoginPage();
