export const without = (l, n) => {
    if(l.includes(n)) {
        let indice = l.findIndex(num => num == n);
        l.splice(indice, 1);
    }

    return l;
};