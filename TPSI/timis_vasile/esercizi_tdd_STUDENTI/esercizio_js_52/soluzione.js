export const psw_gen = (len) => {
    return Array(len).fill(null).map(() => 'romania'[Math.floor(Math.random() * 7)]);
};
