import LoginPage from '../pageobjects/login.page.js';
import MainPage from '../pageobjects/main.page.js';

describe("My Login application", () => {
	it("Should login with invalid credentials", async () => {

		// Открываем страницу авторизации
		await LoginPage.open();

		// Логинемся
		await LoginPage.login('Maksym', '1Test#01');

		await expect(MainPage.menuItemMyAccounts).not.toBeExisting();
		await expect(MainPage.menuItemMyAccounts).not.toHaveTextContaining('Мои счета');
		await expect(responce.to.have.status(400))

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
