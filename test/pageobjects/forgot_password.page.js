
import Page from "./page.js";

class ForgotPasswordPage extends Page {
	get form() { return $('#myId') };
	get formTitle() { return $('#myId h3') };
	get radioButtons() { return $$('input[type="radio"]') }; // get radio buttons array
	get radioBtnTel() { return $('//*[@id="myId"]/div/div[1]/label/span[1]/span[1]/input') };
	get radioBtnTelLabel() { return $('//*[@id="app"]/div[2]/div[2]/form/div/div[1]/label') };
	get radioBtnEmail() { return $('//*[@id="myId"]/div/div[1]/div/label/span[1]/span[1]/input') };
	get inputTel() { return $('input[type="tel"]') };
	get inputTelError() { return $('//*[@id="myId"]/div/div[2]/span') };
	get inputEmail() { return $('input[name="receiver"]') };
	get inputEmailError() { return $('//*[@id="app"]/div[2]/div[2]/form/div/div[2]/p') };
	get submitBtn() { return $('button[type="submit"]') };
	get backBtn() { return $('//*[@id="app"]/div[2]/div[1]/button') };

}

export default new ForgotPasswordPage();