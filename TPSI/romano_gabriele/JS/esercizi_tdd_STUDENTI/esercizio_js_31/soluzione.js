export const search_words = (ph) => {
    let check = ph.includes("coding") || ph.includes("creativo") ? true : false;

    if(check)
        return ph;
    else
        return "parole non trovate";
};

