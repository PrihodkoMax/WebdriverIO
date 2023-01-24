
const domain = ["google.com", "meta.ua", "icloud.com", "yandex.ru"];
const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomString(length) {
	let result = "";
	for (let i = 0; i < length; i++) {
		result += symbols[getRandomInt(0, symbols.length - 1)];
	}
	return result;
}
function getRandomEmail() {
	const username = getRandomString(getRandomInt(3, 5));
	const randdomain = getRandomString(getRandomInt(3, 5));
	return `${username}.${randdomain}@${domain[getRandomInt(0, domain.length - 1)]}`;
}
//console.log(getRandomEmail())
export default getRandomEmail();

