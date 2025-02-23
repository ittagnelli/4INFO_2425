export const reverse = (l) => {
    let lReverse = []
    l.map((item) => lReverse.unshift(item))
    lReverse.splice(0,0,lReverse.reduce((acc, current) => acc += current, 0))
    return lReverse 
};