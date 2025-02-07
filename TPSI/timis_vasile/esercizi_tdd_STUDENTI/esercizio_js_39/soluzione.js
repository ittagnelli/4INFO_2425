export const reverse = (l) => {
    let s = 0;
    let inverso = [];
    l.forEach(item => {
        inverso.unshift(item)
        s += item
    });
    inverso.unshift(s) 
    return inverso
    

    
}