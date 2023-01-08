
    let login;
    let password;

function getRandomLogin(password, login) {

    const minLength = 6;
    const maxLength = 50;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}\\|;:\'",.<>/?';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    
    for (let i = 0; i < length; i++) {
      login += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    
    for (let i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      }

    return password, login;
  
}

  const randomLogin = getRandomLogin();
  console.log(randomLogin)

export default randomLogin;