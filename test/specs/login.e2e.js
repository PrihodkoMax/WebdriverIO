import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';

describe("My Login application", () => {
	
	it("Should login with invalid credentials", async () => {
		async function getStatusCode() {
			return await getStatusCode();
		}

		// Открываем страницу авторизации
		await LoginPage.open();
		await expect(getStatusCode(200));
		await LoginPage.login('Maksym', '1Test#012');
		
		// Get the response status code
		await expect(getStatusCode(401));

		await LoginPage.login('Maksym', '1Test#012');
	
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

	});

});
