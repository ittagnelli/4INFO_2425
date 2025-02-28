export const psw_gen = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = [];
    for (let i = 0; i < len; i++) {
        result.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    return result;
};