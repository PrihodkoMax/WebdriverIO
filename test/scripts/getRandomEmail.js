let domain = ["google.com", "meta.ua", "icloud.com", "yandex.ru",],
    symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";
 
function random(min, max) {
    return (min + Math.random() * (max - min + 1)) | 0
}
function getRandomStr(iLength) {
    let a = ""
    for (let i = 0; i < iLength; i++)
    (a += symbols[random(0, symbols.length - 1)]);
    return a;
}

function getEmail() {
    let c = getRandomStr(random(3, 5)),
        b = getRandomStr(random(3, 5));
    return c + "." + b + "@" + domain[random(0, domain.length - 1)];
}

let randomEmail = getEmail()

console.log(randomEmail)
export default randomEmail;