export const reverse = (l) => {
    let array = [];

    l.forEach((item, i) => {  
        array[l.length - 1 - i] = item;
    });

    console.log(l)
    console.log(array)
    return array;
}

// for (let i = 0; i < Math.floor(len / 2); i++) {
//     let temp = arrayl[i];
//     arrayl[i] = arrayl[len - 1 - i];
//     arrayl[len - 1 - i] = temp;
// }
// return arrayl;