export const reverseAndAddSum = (l) => {
    const reversedArray = [];
    let sum = 0;

    for (let i = 0; i < l.length; i++) {
        sum += l[i];
    }

    for (let i = l.length - 1; i >= 0; i--) {
        reversedArray.push(l[i]);
    }

    reversedArray.unshift(sum);

    return reversedArray;
};
