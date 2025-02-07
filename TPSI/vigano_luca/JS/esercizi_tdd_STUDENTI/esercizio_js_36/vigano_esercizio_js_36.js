export const tronca_parola = (s, pos) => {
    const parole = s.split(' ');
    if (parole.length > pos) {
        return parole.slice(0, pos).join(' ') + "…";
    }
    return s;
 };
 