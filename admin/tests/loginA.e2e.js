import LoginPage from '../pages/loginA.page.js';
<<<<<<< HEAD:admin/tests/loginA.e2e.js
import MainPage from '../pages/mainA.page.js';
=======
import MainPage from '../pages/mainA.page.js.js';
<<<<<<< HEAD
>>>>>>> 8e7a2b56a70b441fc299ed3542121d44c4ed759f:test/specs/loginA.e2e.js
=======
>>>>>>> 91616c740514a5da406f9c7ef6f173ffaced5d91:test/specs/loginA.e2e.js
>>>>>>> master

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
