function getRandomIdGen(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'+'0123456789'+'!№;%:?*()_+/,:><~';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function getRandomIntLenght(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

let abc = getRandomIntLenght(1,9)
let countLenght = getRandomIdGen(5)

console.log(countLenght)

export default countLenght;
