export const avg_age = (l) => {
    return l.reduce((acc, studente) => acc + studente.eta, 0) / l.length;
};
