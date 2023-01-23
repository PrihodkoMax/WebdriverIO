import Page from './pageA.js';

class MainPage extends Page {

	get menuItemMyAccounts() {
		return $('div h6');
	}
}

export default new MainPage();
