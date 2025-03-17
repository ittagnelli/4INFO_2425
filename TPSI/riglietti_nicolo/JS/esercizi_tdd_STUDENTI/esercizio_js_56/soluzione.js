export const avg_age = (l) => {
    return l.reduce((acc, current) => acc + current.eta, 0) / l.length
};
