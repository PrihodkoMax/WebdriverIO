<<<<<<< HEAD
let domain = ["google.com", "meta.ua", "icloud.com", "yandex.ru",],
	symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

function random(min, max) {
	return (min + Math.random() * (max - min + 1)) | 0;
}
function getRandomStr(iLength) {
	let a = "";
	for (let i = 0; i < iLength; i++) {
		(a += symbols[random(0, symbols.length - 1)]);
	}
	return a;
}

function getEmail() {
	let c = getRandomStr(random(3, 5)),
		b = getRandomStr(random(3, 5));
	return c + "." + b + "@" + domain[random(0, domain.length - 1)];
}

let randomEmail = getEmail();

console.log(randomEmail);
export default randomEmail;
=======
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
<<<<<<< HEAD
>>>>>>> 8e7a2b56a70b441fc299ed3542121d44c4ed759f
=======
>>>>>>> 91616c740514a5da406f9c7ef6f173ffaced5d91
>>>>>>> master
