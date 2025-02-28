export const reverse = (l) => {

    let array = [];

    l.forEach((numero, i) => {
        array[l.length - 1 - i] = numero;
    });

    return array;
};

