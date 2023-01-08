
  let loginRandom = 'username_', passwordRandom = 'password_';

  function getRandomCredentials(loginRandom, passwordRandom) {
    const minLength = 8;
    const maxLength = 60;
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}\\|;:\'",.<>/?';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
    for (let i = 0; i < length; i++) {
      loginRandom += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
  
    for (let i = 0; i < length; i++) {
      passwordRandom += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
  
    return { passwordRandom, loginRandom };
  }
  
  const newTestUser = getRandomCredentials(loginRandom, passwordRandom);
  
  console.log(newTestUser);
  
  export default newTestUser