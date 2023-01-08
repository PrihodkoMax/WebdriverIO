const domain = ["google.com", "meta.ua", "icloud.com", "yandex.ru"];
const symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length) {
  let result = "";
  
  for (let i = 0; i < length; i++) {
    result += symbols[getRandomInt(0, symbols.length - 1)];
  }
  
  return result;
}

function generateRandomEmail() {
  const username = generateRandomString(getRandomInt(3, 5));
  const domainName = generateRandomString(getRandomInt(3, 5));
  
  return `${username}.${domainName}@${domain[getRandomInt(0, domain.length - 1)]}`;
}

const randomEmail = generateRandomEmail();
console.log(randomEmail);

export default randomEmail;
