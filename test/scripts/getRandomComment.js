function getRandomComment(length) {

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+/,:><~';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  
  }
  
  return result;

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

// console.log(getRandomComment(getRandomInt(0,250)));

export default getRandomComment(getRandomInt(0,250));