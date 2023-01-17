import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';
import Login from '../scripts/getAuthToken.js';
import axios from 'axios';
import Mocha from 'mocha';

describe("Client Login", () => {

	it("Login with invalid credentials", async () => {

	// Открываем страницу авторизации
	
	await LoginPage.open();
		
	// Логинемся + получаем статус код
	
	await LoginPage.login('testiopuy', '123487654');
	
	//await LoginPage.getStatusCode(LoginPage.login('Maksym', '1Test#01'));
	//await expect(postStatusCode);
	
	await expect(browser.$('//*/p[contains(text(),"Введен неправильный логин или пароль." )]')).toBeDisplayed();

    });

	/*-------------------------------------------------------------------------*/
	
	it("Login with valid credentials", async () => {

	// Открываем страницу авторизации
	
	await LoginPage.open();
	
	// Логинемся, получаем статус код
	
	await LoginPage.getStatusCode(LoginPage.login('Maksym QA', '1Test#01'));
	
	// Проверяем наличие заголовка
	
	await expect(MainPage.menuItemMyAccounts).toBeExisting();

	// Сверяем текст заголовка
	
	await expect(MainPage.menuItemMyAccounts).toHaveTextContaining('Мои счета' || 'Мої ранунки' || 'My accounts');
	
	});

	/*-------------------------------------------------------------------------*/
	
	it("Get Barear Token", async () => {
	
	await Login;	
	
   });
});
