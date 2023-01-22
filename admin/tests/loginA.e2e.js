import LoginPage from '../pages/loginA.page.js';
import MainPage from '../pages/mainA.page.js';

describe("My LoginA application", () => {
	it("Should login with valid credentials", async () => {

		// Открываем страницу авторизации
		await LoginPage.open();

		// Логинемся
		await LoginPage.login('admin.maev', 'Q!q12345678');

		// Проверяем наличие заголовка
		await expect(MainPage.menuItemMyAccounts).toBeExisting();

		// Сверяем текст заголовка
		await expect(MainPage.menuItemMyAccounts).toHaveTextContaining('MONO');

	});
});
