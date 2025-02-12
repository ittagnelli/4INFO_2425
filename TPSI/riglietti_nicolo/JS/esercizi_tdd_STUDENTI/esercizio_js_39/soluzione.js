export const reverse = (l) => {
    let array = [];
    let somma = 0;   

    l.forEach((numero, i) => {
        array[l.length - 1 - i] = numero;
        somma += numero;
    });

    array.unshift(somma)

    return array;
}