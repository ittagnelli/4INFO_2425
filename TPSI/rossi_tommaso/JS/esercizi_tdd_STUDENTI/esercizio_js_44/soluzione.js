export const ordina = (l) => {
    return l.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1));
};
