
const domain = ["google.com", "meta.ua", "icloud.com", "domain.com", "domain.subdomain.com", "protonmail.com", "qatest.ua"];
const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

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
	const username = getRandomString(getRandomInt(6, 8));
	const randdomain = getRandomString(getRandomInt(6, 8));
	return `${username}${randdomain}@${domain[getRandomInt(0, domain.length - 1)]}`;
}
console.log(getRandomEmail())
export default getRandomEmail();

