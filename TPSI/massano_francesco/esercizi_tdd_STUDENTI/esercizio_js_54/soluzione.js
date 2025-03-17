export const gen_arr = (len) => {
    let array = Array(len).fill(Math.floor(Math.random() * 10));
    let arrayInvertito = array.reverse();
    return [array,arrayInvertito];
};