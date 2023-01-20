import LoginPage from '../pages/login.page.js';
import MainPage from '../pages/main.page.js';

describe("My Login application", () => {
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
