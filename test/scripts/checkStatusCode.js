import { get } from 'https';
import LoginPage from '../pageobjects/login.page.js';

    async function checkStatusCode() {
    try {
    // Make a request to get the status code
    const response = await get(LoginPage.url);
    const statusCode = response.statusCode;
    // Check that the status code is 200
    expect(statusCode).toBe(200);
    checkResponseCode(statusCode);

    if(statusCode === 200) {
        return testFunction(true);
    } else {
        return testFunction(false);
    }
} catch (error) {
    console.error(error);
}
  }


//checkStatusCode();
export default checkStatusCode();