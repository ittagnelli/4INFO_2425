export const reverse = (l) => {
    const reversedArray = [];
    for (let i = l.length - 1; i >= 0; i--) {
        reversedArray.push(l[i]);
    }
    return reversedArray;
};
