export const search_words = (ph) => {
    const paroleChiave = ["coding", "creativo"];
    
    for (let parola of paroleChiave) {
        if (ph.includes(parola)) {
            return ph;
        }
    }
    
    return "Parole non trovate";
};