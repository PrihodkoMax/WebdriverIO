  //Create param 
    const stringUsername = 'userName_';
    const minLength = 6;
    const maxLength = 50;
    const delate = 2;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numberString = '0123456789';
    const symbolString = '!@#$%^&*()_+-=[]{}\\|;:\'",.<>/?';
  
  //Create function that generate random login
  function getRandomLogin(userLogin) {
    let login = '';
    let number = '';
    let symbol = '';
    const length = Math.floor(Math.random() * (maxLength - minLength) / delate );
    for (let i = 0; i < length; i++) {
      login += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      number += numberString.charAt(Math.floor(Math.random() * numberString.length));
      symbol += symbolString.charAt(Math.floor(Math.random() * symbolString.length));

    }

    return userLogin = stringUsername + login + number + symbol;

  }

// console.log(getRandomLogin())

export default getRandomLogin();