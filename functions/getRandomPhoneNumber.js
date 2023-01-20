function getRandomUaPhoneNumber() { // Велика і непереможна держава - Україна
  let countryCodes = ["+380"]; 
  let mobileOperatorCodes = ["93", "67", "50", "96"]; 
  let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
  let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
  return countryCode + mobileOperatorCode + localNumber;
}
//console.log(getRandomUaPhoneNumber());
/*--------------------------------------*/
function getRandomUsaPhoneNumber() { // США
  let countryCodes = ["+1"]; 
  let mobileOperatorCodes = ["810", "829"]; 
  let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
  let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
  return countryCode + mobileOperatorCode + localNumber;
}
//console.log(getRandomUsaPhoneNumber());
/*--------------------------------------*/
function getRandomEngPhoneNumber() { // К. Британии
  let countryCodes = ["+44"]; 
  let mobileOperatorCodes = ["743", "075","737"]; 
  let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
  let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
  return countryCode + mobileOperatorCode + localNumber;
}
//console.log(getRandomEngPhoneNumber());
/*--------------------------------------*/
function getRandomNedPhoneNumber() { // К. Нидерландов
  let countryCodes = ["+31"]; 
  let mobileOperatorCodes = ["649","620"]; 
  let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
  let localNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
  return countryCode + mobileOperatorCode + localNumber;
}
//console.log(getRandomNedPhoneNumber());
/*--------------------------------------*/
function getRandomGerPhoneNumber() { // Германия
  let countryCodes = ["+49"]; 
  let mobileOperatorCodes = ["152","174"]; 
  let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
  let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
  let localNumber = Math.floor(Math.random() * 100000000).toString().padStart(8, "0");
  return countryCode + mobileOperatorCode + localNumber;
}
//console.log(getRandomGerPhoneNumber());
/*--------------------------------------*/
function getRandomPhoneNumber() { // Генерирует один случайный номер из массива функций. 
  const phoneNumberFunctions = [
    getRandomUaPhoneNumber(),
    getRandomUsaPhoneNumber(),
    getRandomEngPhoneNumber(),
    getRandomNedPhoneNumber(),
    getRandomGerPhoneNumber()
  ];
  const randomFunc = phoneNumberFunctions[Math.floor(Math.random() * phoneNumberFunctions.length)];
  return randomFunc;
}
/*--------------------------------------*/
//console.log(getRandomPhoneNumber());

export default getRandomPhoneNumber;getRandomUaPhoneNumber;getRandomUsaPhoneNumber;getRandomEngPhoneNumber;getRandomNedPhoneNumber;getRandomGerPhoneNumber;