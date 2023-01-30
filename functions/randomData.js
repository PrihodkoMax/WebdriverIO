export const randoms = {

	symbolsAll: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\'"#%&()*+,-./:;<=>?[\\]^_`{|}~', // except '$@' 
	symbolsCirillic: 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяЁёЄєЇї0123456789!\'"#%&()*+,-./:;<=>?[\\]^_`{|}~', // except '$@'
	numbers: '0123456789',
	symbols: '!\'"#$%&()*+,-./:;<=>?@[]^_`{|}~',
	characters: 'abcdefghijklmnopqrstuvwxyz',
	capitalCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	symbolsForEmail: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
	domains: ["codec.ro", "meta.ua", "icloud.com", "domain.com", "comic.com", "cww.de", "0-mail.com", "020.co.uk", "adam.com.au", "ados.fr", "test.edu", "ahaa.dk", "ahk.jp", "alive.cz", "amuro.net", "anote.com", "aol.de", "aol.fr", "aol.it", "aol.jp", "aon.at", "ausi.com", "bboy.com", "beer.com", "big1.us", "blader.com", "boom.com", "box.ua", "btcc.org", "bund.us", "cantv.net", "cek.pm", "cgac.es", "citiz.net", "clerk.com", "cox.com", "ddns.org"],

	// Метод возвращает рандомно сгенерированную строку с указанной длинной, по дефолту 8 символов
	getRandomString(length = 8) {
		let str = '';
		for (let i = 0; i < length; i++) {
			str += this.symbolsAll.charAt(Math.floor(Math.random() * this.symbolsAll.length));
		}
		return str;
	},

	// Метод возвращает рандомно сгенерированную строку с указанной длинной, по дефолту 8 символов
	getRandomStringCyrillic(length = 8) {
		let str = '';
		for (let i = 0; i < length; i++) {
			str += this.symbolsCirillic.charAt(Math.floor(Math.random() * this.symbolsCirillic.length));
		}
		return str;
	},

	// Метод возвращает значение (string) в пределах передаваемой минимальной / максимальной длины. 
	getRandomMinMaxString(minLength, maxLength) {
		const str = '';
		let abc = '';
		let length = Math.floor(minLength + Math.random() * (maxLength - minLength));
		for (let i = 0; i < length; i++) {
			abc += this.symbolsAll.charAt(Math.floor(Math.random() * this.symbolsAll.length));
		}
		return (str + abc);
	},

	/************************************************************************/

	// @param {secureLevel} - |number| регулирует длину пароля
	// - по дефолту длина пароля 8 символов
	// - secureLevel = 3 вернет пароль из 14 символов
	// - secureLevel = 4 вернет пароль из 22 символов 
	// ...
	getRandomPassword(secureLevel = 2) {

		let pass = '';
		for (let i = 0; i < 1; i++) {
			pass += this.capitalCharacters.charAt(Math.floor(Math.random() * this.capitalCharacters.length));
			for (let j = 0; j < 1; j++) {
				pass += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
				for (let k = 0; k < secureLevel; k++) {
					pass += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
					for (let l = 0; l < secureLevel; l++) {
						pass += this.numbers.charAt(Math.floor(Math.random() * this.numbers.length));
					}
				}
			}
			return pass;
		}
	},

	/************************************************************************/

	getRandomEmail(length = 20) {
		let res = '', dom = '';
		for (let i = 0; i < length; i++) {
			res += this.symbolsForEmail[Math.floor(Math.random() * this.symbolsForEmail.length)];
		}
		dom = this.domains[Math.floor(Math.random() * this.domains.length)];
		return `${res}@${dom}`;
	},

	/************************************************************************/

	// Генерация рандомных номеров телефона с кодом разных стран
	getRandomUaPhoneNumber() { 		// Велика і непереможна держава - Україна
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
	getRandomPhoneNumber() {			// Генерирует один случайный номер
		const phoneNumberFunctions = [
			this.getRandomUaPhoneNumber(),
			this.getRandomUsaPhoneNumber(),
			this.getRandomEngPhoneNumber(),
			this.getRandomNedPhoneNumber(),
			this.getRandomGerPhoneNumber()
		];
		const randomFunc = phoneNumberFunctions[Math.floor(Math.random() * phoneNumberFunctions.length)];
		return randomFunc;
	},

};
// console.log(randoms.getRandomEmail());