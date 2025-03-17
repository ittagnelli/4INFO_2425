export const reverse = (l) => {
    let res = []
    l.map(item=> res.unshift(item))
    res.unshift(l.reduce((acc, current) => acc + current, 0))
    return res;
}


    
// export const reverse = (l) => {
//     let res = []
//     l.map(item=> res.unshift(item))
//     res.unshift(l.reduce((acc, current) => acc + current, 0))
//     return res;
// }


// export const reverse = (l) => {
//     let array = [];
//     let e = 0;
//     l.forEach((item, i) => {  
//         array[l.length - 1 - i] = item;
//         e = item + e;
//     });
//     array.unshift(e);

//     console.log(l)
//     console.log(array)
//     console.log(e)
//     return array;
// }