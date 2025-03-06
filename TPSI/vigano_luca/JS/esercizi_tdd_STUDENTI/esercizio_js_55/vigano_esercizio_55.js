export const no_copies = (array) => {
   const uniqueArr = [];
    const seen = {};
    for (let i = 0; i < array.length; i++) {
        if (!seen[array[i]]) {
            uniqueArr.push(array[i]);
            seen[array[i]] = true;
        }
    }
    return uniqueArr;
}
