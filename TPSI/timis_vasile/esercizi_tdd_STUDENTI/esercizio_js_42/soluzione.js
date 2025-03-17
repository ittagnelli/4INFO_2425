export const swap = (l, n, m) => {
    // Rimuovi l'elemento in posizione n e salvalo in un array
    const element = l.splice(n, 1)[0];
    l.splice(m, 0, element);
    return l;
};
