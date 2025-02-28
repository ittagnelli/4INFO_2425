export const moveElement = (arr, N, M) => {
    if (N < 0 || N >= arr.length || M < 0 || M >= arr.length) {
        return arr;
    }

    const element = arr.splice(N, 1)[0];

    arr.splice(M, 0, element);

    return arr;
};
