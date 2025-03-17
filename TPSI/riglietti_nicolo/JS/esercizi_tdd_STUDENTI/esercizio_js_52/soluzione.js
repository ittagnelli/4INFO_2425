export const psw_gen = (len) => {
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let array = new Array(len).fill(null)
    return array.map(() => char[Math.floor(Math.random() * char.length)])
};