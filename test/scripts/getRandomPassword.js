  //Create param 
    const stringPassword = 'userPassword_';
    const minLength = 6;
    const maxLength = 50;
    const delate = 2;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numberString = '0123456789';
    const symbolString = '!@#$%^&*()_+-=[]{}\\|;:\'",.<>/?';
  
  //Create function that generate random password 
  function getRandomPassword(userPassword) {
    let password = '';
    let number = '';
    let symbol = '';
    const length = Math.floor(Math.random() * (maxLength - minLength) / delate );
      for (let i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        number += numberString.charAt(Math.floor(Math.random() * numberString.length));
        symbol += symbolString.charAt(Math.floor(Math.random() * symbolString.length));
      }

    return userPassword = stringPassword + (password + number + symbol);
  
}

//console.log(getRandomPassword())

export default getRandomPassword();