export const reverse = (l) => {
    let result = [];

    l.forEach((el) => result.unshift(el));

    result.unshift(l.reduce((acc, curr) => acc + curr, 0));

    return result;
};