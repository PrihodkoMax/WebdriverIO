import Page from '../pageA.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get menuItemMyAccounts() {
		return $(
		'div h6');
	}
}

export default new MainPage();
