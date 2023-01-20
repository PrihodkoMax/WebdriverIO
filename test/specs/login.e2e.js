import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';
import Login from '../../functions/getAuth.js';
import getRandomString from '../../functions/getRandomString.js';

describe("Проверяем страницу: /login  ", () => {

	it("Проверяем все элементы страницы", async () => {
	await LoginPage.open();
	await LoginPage.logoImageBtn.click();
	});
	
	it("Логин с данными несуществующего пользователя", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('testiopuy', '123487654'); 	// Логинемся
	await expect(browser.$('//*/p[contains(text(),"Введен неправильный логин или пароль.")]')).toBeDisplayed(); // Проверяем отображение ошибки
	});

	it("Логин c пустыми полями: username, password", async () => {
	await LoginPage.open(); 
	await LoginPage.login('', ''); 	
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Поле обязательно к заполнению")]')).toBeDisplayed(); // Проверяем отображение ошибки
	});

	it("Логин с username, password < минимального лимита", async () => {
	let username = '' + getRandomString(1, 5);
	let password = ''+ getRandomString(1, 7);
	await LoginPage.open(); 
	await LoginPage.login(`${(username)}`, `${(password)}`); 	
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Минимальная длина строки:  6")]')).toBeDisplayed(); 
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Минимальная длина строки:  8")]')).toBeDisplayed();
	});

	it("Логин с username < минимального лимита, и пустым полем password ", async () => {
	let username = '' + getRandomString(1, 5);
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login(`${(username)}`, ''); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Минимальная длина строки:  6")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Поле обязательно к заполнению")]')).toBeDisplayed();
	});

	it("Логин с username > максимального лимита, и пустым полем password ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer', ''); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Максимальная длина строки:  50")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Поле обязательно к заполнению")]')).toBeDisplayed();
	});

	it("Логин с username > максимального лимита, и c password < минимального лимита ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer', '1234'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Максимальная длина строки:  50")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Минимальная длина строки:  8")]')).toBeDisplayed();
	});

	it("Логин с username, password > максимального лимита ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer', 'dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Максимальная длина строки:  50")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Максимальная длина строки:  60")]')).toBeDisplayed();
	});

	it("Логин с password < минимального лимита, и пустым полем username ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('', 'dwer'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Поле обязательно к заполнению")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Минимальная длина строки:  8")]')).toBeDisplayed();
	});

	it("Логин с password > максимального лимита, и пустым полем username ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('', 'dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Поле обязательно к заполнению")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Максимальная длина строки:  60")]')).toBeDisplayed();
	});

	it("Логин с password > максимального лимита, и username < минимального лимита  ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwer5', 'dwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwerdwer'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Минимальная длина строки:  6")]')).toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Максимальная длина строки:  60")]')).toBeDisplayed();
	});

	it("Логин с password, username = максимальному лимиту  ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwerdwerdwerdwerdwerdwerdwerdwerdwerdrdwerdwerdwer', 'dwerdwerdwerdwerdwerdwerdwerdwerdwerdrdwerdwerdwer0987654321'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Максимальная длина строки:  50")]')).not.toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Максимальная длина строки:  60")]')).not.toBeDisplayed();
	});

	it("Логин с password, username = минимальному лимиту  ", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	await LoginPage.login('dwerdwe', 'dwerdwe21'); 	// Логинемся
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[1]/p[contains(text(),"Минимальная длина строки:  6")]')).not.toBeDisplayed();
	await expect(browser.$('//*[@id="app"]/div[2]/div[2]/form/div[2]/p[contains(text(),"Минимальная длина строки:  8")]')).not.toBeDisplayed();
	});

	it("Логин с данными существующего пользователя", async () => {
	await LoginPage.open(); // Открываем страницу авторизации
	LoginPage.login('Maksym QA', '1Test#01'); 	// Логинемся, получаем статус код
	await expect(MainPage.menuItemMyAccounts).toBeExisting();  // Проверяем наличие заголовка
	await expect(MainPage.menuItemMyAccounts).toHaveTextContaining('Мои счета' || 'Мої ранунки' || 'My accounts'); 	// Сверяем текст заголовка
	});

	it("Получаем: Bearer: token, и записываем в default headers для всех следующих запросов Api", async () => {
	await Login;	
   	});

});
