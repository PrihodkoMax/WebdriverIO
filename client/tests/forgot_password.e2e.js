import LoginPage from '../pages/login.page.js';

describe("Forgot password", () => {
	
	it("Forgot password modal window displayed", async () => {

		await LoginPage.open();
		await LoginPage.forgotPassword.click();

		await expect(browser.$('form[id="myId"]')).toBeDisplayed();
		await expect(browser.$$('input[type="radio"]')).toBeElementsArrayOfSize(2);
		await expect(browser.$('//*[@id="myId"]/div/div[1]/label/span[1]/span[1]/input')).toBeChecked();
		await expect(browser.$('input[type="tel"]')).toBeDisplayed();
		await expect(browser.$('button[type="submit"]')).toBeDisplayed();

	});
});
