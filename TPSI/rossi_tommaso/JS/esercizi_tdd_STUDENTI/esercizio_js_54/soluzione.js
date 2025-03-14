export const gen_arr = (len) => {
    let array = new Array(len).fill(Math.floor(Math.random()))
    return [array, array.reverse()];
};