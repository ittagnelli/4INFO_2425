export const reverse = (l) => {
    let inverso = [];
    l.forEach(item => {
        inverso.unshift(item)
    });
    return inverso
};

