export const without = (l, n) => {
    let numeri = [1, 3, 5, 7, 9, 11];
    n = 7;
    let rimosso = numeri.splice(3);
    console.log("Array tagliato dall'indice 3:", numeri);
    console.log("Parte di array rimosso:", rimosso);

};
