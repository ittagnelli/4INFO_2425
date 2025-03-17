function generateRandom(rand, len) {
    while(rand < 97 || rand > 122) {
        rand = Math.floor(Math.random() * len);
    }
    return rand;
}

export const psw_gen = (len) => {
    let rand = Math.floor(Math.random() * len);
    return Array(7).fill(0).map(value => value = String.fromCharCode(generateRandom(rand, len)));
};