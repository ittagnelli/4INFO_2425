export const reverse = (l) => {
    let risultato = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        risultato[arr.length - 1 - i] = arr[i];
    }
    return risultato;
};
