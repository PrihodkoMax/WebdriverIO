export const phoneNumbers = {
	validUserPhoneNum: '+3655090098',						// пользователь Maksym QA

	// Генерация рандомных номеров телефона с кодом:
	// Украины, США, Британии, Нидерландов, Германии 

	getRandomUaPhoneNumber: () => { 			// Велика і непереможна держава - Україна
		let countryCodes = ["+380"];
		let mobileOperatorCodes = ["93", "67", "50", "96"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomUsaPhoneNumber: () => { 		// США
		let countryCodes = ["+1"];
		let mobileOperatorCodes = ["810", "829"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomEngPhoneNumber: () => { 		// К. Британии
		let countryCodes = ["+44"];
		let mobileOperatorCodes = ["743", "075", "737"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomNedPhoneNumber: () => { 		// К. Нидерландов
		let countryCodes = ["+31"];
		let mobileOperatorCodes = ["649", "620"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomGerPhoneNumber: () => { 		// Германия
		let countryCodes = ["+49"];
		let mobileOperatorCodes = ["152", "174"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 100000000).toString().padStart(8, "0");
		return countryCode + mobileOperatorCode + localNumber;
	}
};

export const randomStrings = {

	// Метод возвращает рандомно сгенерированную строку с указанной длинной, по дефолту 8 символов
	getRandomString: (length = 8) => {
		const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\'"#$%&()*+,-./:;<=>?@[\\]^_`{|}~';
		let str = '';
		for (let i = 0; i < length; i++) {
			str += symbols.charAt(Math.floor(Math.random() * symbols.length));
		}
		return str;
	},

	// Метод возвращает рандомно сгенерированную строку с указанной длинной, по дефолту 8 символов
	getRandomStringCyrillic: (length = 8) => {
		const symbols = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяЁёЄєЇї0123456789!\'"#$%&()*+,-./:;<=>?@[\\]^_`{|}~';
		let str = '';
		for (let i = 0; i < length; i++) {
			str += symbols.charAt(Math.floor(Math.random() * symbols.length));
		}
		return str;
	},

	// Метод возвращает значение (string) в пределах передаваемой минимальной / максимальной длины. 
	getRandomMinMaxString: (minLength, maxLength) => {
		const stringUsername = '';
		const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\'"#$%&()*+,-./:;<=>?@[\\]^_`{|}~';
		let abc = '';
		let length = Math.floor(minLength + Math.random() * (maxLength - minLength));
		for (let i = 0; i < length; i++) {
			abc += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
		}
		return (stringUsername + abc);
	},
};

console.log(randomStrings.getRandomMinMaxString(2, 6));




// // Генерирует один случайный номер из массива функций.
// function getRandomPhoneNumber() {
// 	const phoneNumberFunctions = [
// 		getRandomUaPhoneNumber(),
// 		getRandomUsaPhoneNumber(),
// 		getRandomEngPhoneNumber(),
// 		getRandomNedPhoneNumber(),
// 		getRandomGerPhoneNumber()
// 	];
// 	const randomFunc = phoneNumberFunctions[Math.floor(Math.random() * phoneNumberFunctions.length)];
// 	return randomFunc;
// }
// //  console.log(getRandomPhoneNumber());
// /*--------------------------------------*/
// export default getRandomUaPhoneNumber(); getRandomUsaPhoneNumber(); getRandomEngPhoneNumber(); getRandomNedPhoneNumber(); getRandomGerPhoneNumber();

