
export const reverse = (l) => {
    let inverso = [];
    l.map((item) => inverso.splice(0,0,item));
    inverso.unshift(inverso.reduce((acc, current) => acc + current, 0));
    return inverso;
};
