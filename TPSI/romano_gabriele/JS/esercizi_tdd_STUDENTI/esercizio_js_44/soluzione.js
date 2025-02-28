export const ordina = (l) => {
    let sorted = l.sort((b1, b2) => b2.title - b1.title);

    return sorted;
};
