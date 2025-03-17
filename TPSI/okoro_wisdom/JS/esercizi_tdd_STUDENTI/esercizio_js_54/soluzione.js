export const gen_arr = (len) => {
    let arr = Array.from({length: len}, () => Math.floor(Math.random() * 100));
    console.log("Array originale:", arr);
    console.log("Array invertito:", [...arr].reverse());
    return arr;
};
