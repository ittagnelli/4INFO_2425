export const ordina = (l) => {
    let libri_ordinati = l.sort((libro1, libro2) => libro2.title.localeCompare(libro1.title));
    return libri_ordinati;
}; 
