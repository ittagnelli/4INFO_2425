export const reverse = (l) => {
    let out = [];

    l.forEach((element) => {
        out.unshift(element)
    });

    return out;
};

