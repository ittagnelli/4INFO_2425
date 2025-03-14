export const avg_age = (l) => {
    let sum = 0;
    l.forEach(object => sum += +object.eta)
    return sum / l.length;
};
