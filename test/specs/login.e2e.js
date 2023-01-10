import { generateKey, randomInt, randomUUID } from 'crypto';
import { get } from 'http';
//import test from 'node:test';
import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';
import checkResponseCode from '../scripts/checkResponseCode.js';
import testFunction from '../scripts/get_testIdResult.js';
import TESTING_LIBRARY_PACKAGES from'./build/constants.js';
//import getRandomName from '../scripts/getRandomName.js';
import { Test } from 'mocha';
import getRandomCredentials from '../scripts/getRandomCredentials.js';
import { TESTING_LIBRARY_PACKAGES } from '@wdio/cli/build/constants.js';
import { createWDIOConfig, createWDIOScript } from '@wdio/cli/build/utils.js';
/*
describe ("Login Page test", Test.id = [randomUUID], Test.name = 'Login test suite',   () => {

	//testName = test(randomInt) + 
	it (Test.name = "Should log in with invalid credentials", async () => {
    
	// Open login page
	await LoginPage.open();

	async function getStatusCode() {
	  
	// Make a request to get the status code
      const response = await get(LoginPage.url);
      return response.statusCode;
   
	}
	
    // Check that the status code is 200
    const statusCode = await getStatusCode();
    await expect(statusCode).toBe(200);
    checkResponseCode(statusCode);

    // Attempt to log in with invalid credentials
    await LoginPage.login(getRandomCredentials.loginRandom, getRandomCredentials.passwordRandom);

    // Check that the status code is 401
    const statusCode1 = await this.getStatusCode();
    await expect(statusCode1).toBe(401);
    checkResponseCode(statusCode1);

	setTimeout(1000);

    if(statusCode === '200') {
		return testFunction(true)
	}
	else {
		return testFunction(false)
	}
	
})

});



*/
describe ("My Login application", () => {
	it("Should logi mnbn with invalid credentials", testFunction(id, result), async () => {
		async function getStatusCode() {
			return await getStatusCode();
		}

		// Открываем страницу авторизации
		await LoginPage.open();
		await expect(getStatusCode(200));
		await checkResponseCode(200);
		await LoginPage.login('Maksym', '1Test#012');
		
		// Get the response status code
		await expect(getStatusCode(401));
		await checkResponseCode(401);

		return testFunction(id, result)
	}); 

setTimeout(1000);

});

	it("Should login with valid credentials", async () => {

		// Открываем страницу авторизации
		await LoginPage.open();

		// Логинемся
		await LoginPage.login('Maksym QA', '1Test#01');

		// Проверяем наличие заголовка
		await expect(MainPage.menuItemMyAccounts).toBeExisting();

		// Сверяем текст заголовка
		await expect(MainPage.menuItemMyAccounts).toHaveTextContaining('Мои счета');
		setTimeout(1000);
	});
