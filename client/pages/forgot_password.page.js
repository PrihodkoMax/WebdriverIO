
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
	get codeEnterForm() { return $('//*[@id="app"]/div[3]/div[2]/form') };
	get closeCodeEnterFormBtn() { return $('svg[width="14"]') };
	get inputOtpCode() { return $('input[name="code"]') };
	get inputOtpCodeError() { return $('//*[@id="app"]/div[3]/div[2]/form/div[1]/p') };
	get submitOtpCodeBtn() { return $('//*[@id="app"]/div[3]/div[2]/form/button') };
	get modalSuccess() { return $('//*[@id="app"]/div[3]/div[2]') };
	get modalSuccessBtn() { return $('//*[@id="app"]/div[3]/div[2]/button') };
	get modalSuccessByEmailText() { return $('//*[@id="app"]/div[3]/div[2]/p') };
	get modalSuccessByTelText() { return $('//*//*[@id="app"]/div[3]/div[2]/h3') };
	get recoverPassForm() { return $('//*[@id="app"]/div[2]/div[2]/form') };
	get recoverPassFormTitle() { return $('//*[@id="app"]/div[2]/div[2]/form/h3') };
	get inputNewPassword() { return $('input[name="new_password"]') };
	get inputNewPasswordConfirm() { return $('input[name="new_password_confirmation"]') };
	get hintsPassword() { return $$('//*[@id="app"]/div[2]/div[2]/form/div[3]/div') };			// array of pssword hints

	async recoverPassbyTel(tel, code) {
		await this.inputTel.setValue(tel);
		await this.submitBtn.click();
		await this.inputOtpCode.addValue(code);
		await this.submitOtpCodeBtn.click();
	}
}

export default new ForgotPasswordPage();