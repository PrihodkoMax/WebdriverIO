function getRandomString(minLength, maxLength) { // Создаем функцию которая возвращает значение (string) в пределах передаваемой минимальной / максимальной длины.
    const stringUsername = '';
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'+'0123456789'+'!"#$%&'+'()*+,-./:;<=>?@'+'['+'\''+']^'+'_'+'`{|}~';
    let abc = '';
    let length = Math.floor(minLength + Math.random() * (maxLength - minLength));
    for (let i = 0; i < length; i++) {
      abc += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    const stringRand = (stringUsername + abc);
    return stringRand
  }
// console.log(getRandomString(4,7))
export default getRandomString;