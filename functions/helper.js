export const phoneNumbers = {

	// Генерация рандомных номеров телефона с кодом разных стран

	getRandomUaPhoneNumber() { 			// Велика і непереможна держава - Україна
		let countryCodes = ["+380"];
		let mobileOperatorCodes = ["93", "67", "50", "96"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomUsaPhoneNumber() { 		// США
		let countryCodes = ["+1"];
		let mobileOperatorCodes = ["810", "829"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomEngPhoneNumber() { 		// К. Британии
		let countryCodes = ["+44"];
		let mobileOperatorCodes = ["743", "075", "737"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomNedPhoneNumber() { 		// К. Нидерландов
		let countryCodes = ["+31"];
		let mobileOperatorCodes = ["649", "620"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomGerPhoneNumber() { 		// Германия
		let countryCodes = ["+49"];
		let mobileOperatorCodes = ["152", "174"];
		let countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
		let mobileOperatorCode = mobileOperatorCodes[Math.floor(Math.random() * mobileOperatorCodes.length)];
		let localNumber = Math.floor(Math.random() * 100000000).toString().padStart(8, "0");
		return countryCode + mobileOperatorCode + localNumber;
	},
	getRandomPhoneNumber() {					//  Генерирует один случайный номер
		const phoneNumberFunctions = [
			this.getRandomUaPhoneNumber(),
			this.getRandomUsaPhoneNumber(),
			this.getRandomEngPhoneNumber(),
			this.getRandomNedPhoneNumber(),
			this.getRandomGerPhoneNumber()
		];
		const randomFunc = phoneNumberFunctions[Math.floor(Math.random() * phoneNumberFunctions.length)];
		return randomFunc;
	}
};
// console.log(phoneNumbers.getRandomPhoneNumber());


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
// console.log(randomStrings.getRandomString().slice(4));


export const passwords = {
	/*
	 * метод getRandomPassword(secureLevel)
		@param {secureLevel} - |number| регулирует длину пароля
		- по дефолту длина пароля 8 символов
		- secureLevel = 3 вернет пароль из 14 символов
		- secureLevel = 4 вернет пароль из 22 символов 
		...
	*/
	getRandomPassword(secureLevel = 2) {
		const numbers = '0123456789';
		const symbols = '!\'"#$%&()*+,-./:;<=>?@[]^_`{|}~';
		const characters = 'abcdefghijklmnopqrstuvwxyz';
		const capitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let pass = '';
		for (let i = 0; i < 1; i++) {
			pass += capitalCharacters.charAt(Math.floor(Math.random() * capitalCharacters.length));
			for (let j = 0; j < 1; j++) {
				pass += characters.charAt(Math.floor(Math.random() * characters.length));
				for (let k = 0; k < secureLevel; k++) {
					pass += symbols.charAt(Math.floor(Math.random() * symbols.length));
					for (let l = 0; l < secureLevel; l++) {
						pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
					}
				}
			}
		}
		return pass;
	},
	/************************************************************************/

}
// console.log(password.getRandomPassword());
