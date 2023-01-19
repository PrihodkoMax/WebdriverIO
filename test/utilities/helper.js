// Генерация рандомного номера телефона с кодом Украины 
export const generateRandomPhoneNumber = (num = 7) => {
	let phone = '512';
	for (let i = 0; i < num; i++) {
		phone += Math.floor(Math.random() * num);
	}
	return `${phone}`;
};

// console.log(generateRandomPhoneNumber(2));

