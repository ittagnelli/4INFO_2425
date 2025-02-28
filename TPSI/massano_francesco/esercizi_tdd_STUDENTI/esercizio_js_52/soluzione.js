export const psw_gen = (len) => {
    let array = Array(len).fill(Math.floor(Math.random() * 10));
    return array;
};