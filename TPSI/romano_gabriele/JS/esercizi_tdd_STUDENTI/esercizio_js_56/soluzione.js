export const avg_age = (l) => {
    return l.reduce((acc, oggetto) => acc + oggetto.eta, 0) / l.length;
};
