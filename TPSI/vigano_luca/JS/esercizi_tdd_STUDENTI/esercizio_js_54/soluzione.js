export const gen_arr = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return [arr, arr.slice().reverse()];
};