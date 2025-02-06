export const search_words = (ph) => {
    const parolechiave = ["coding", "creativo"];
    for (let parolechiave of parolechiave) {
        if (ph.includes(parolechiave)) {
            return ph;
        }
    }
    return "parole non trovate";
};

