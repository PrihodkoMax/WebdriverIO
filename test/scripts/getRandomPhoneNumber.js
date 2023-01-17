function getRandomPhoneNumber() {
  
  // Start with a random country code
  let number = "+" + Math.floor(Math.random() * 100);

  // Add random digits for the local number
  for (let i = 1; i < 9; i++) {
    number += Math.floor(Math.random() * 10);
  
  }
  return number;
}

console.log(getRandomPhoneNumber())
export default getRandomPhoneNumber();