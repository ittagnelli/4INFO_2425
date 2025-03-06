export const psw_gen = (len) => {
    return Array.from({ length: 7 }, () => len[Math.floor(Math.random() * len.length)]);
};