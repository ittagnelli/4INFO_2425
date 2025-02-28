export const gen_arr = (len) => {
    const arr = Array.from({ length: len }, () => Math.floor(Math.random() * 101));
    console.log(arr);
    console.log(arr.reverse());
};
