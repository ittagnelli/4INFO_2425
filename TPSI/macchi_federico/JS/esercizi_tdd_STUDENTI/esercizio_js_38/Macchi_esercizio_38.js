export const reverse = (1) => {
    let risultato = new Array(arr.length);
    arr.forEach((element, index) => {
        risultato[arr.length - 1 - index] = element;
    });
    return risultato;
};
