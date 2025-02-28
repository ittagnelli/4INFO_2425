export const gen_arr = (len) => {
    let array = new Array(len).fill(0).map(() => Math.floor(Math.random() * 100))
    return [array, [...array].reverse()]
};