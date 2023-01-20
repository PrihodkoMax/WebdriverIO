import LoginPage from '../pages/loginA.page.js';
<<<<<<< HEAD:admin/tests/loginA.e2e.js
import MainPage from '../pages/mainA.page.js';
=======
import MainPage from '../pages/mainA.page.js.js';
>>>>>>> 91616c740514a5da406f9c7ef6f173ffaced5d91:test/specs/loginA.e2e.js

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
