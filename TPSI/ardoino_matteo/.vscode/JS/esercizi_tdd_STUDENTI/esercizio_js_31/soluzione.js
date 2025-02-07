export const search_words = (ph) => {
    if (ph.toLowerCase().indexOf('coding') != -1 || ph.toLowerCase().indexOf('creativo')!= -1)
        return ph;
    return 'parole non trovate';
};

