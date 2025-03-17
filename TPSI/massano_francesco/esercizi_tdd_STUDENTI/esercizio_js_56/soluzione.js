export const avg_age = (l) => {
    let eta = l.reduce((acc,current) => acc + current.eta, 0);
    let media = eta/l.length;
    return media;
};
