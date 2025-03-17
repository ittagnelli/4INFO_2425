export const reverse = (l) => {
    let risultato = [];
    l.forEach(element => {
        risultato.unshift(element);
    });
    
    return risultato;
};
// let reversedArray = []; 
// for(let i = l.length - 1; i >= 0; i--){
//     reversedArray.push(l[i]);
// }
// return reversedArray;

// let risultato = [];
// for(let i = 0; i < l.length; i++){
//     risultato.unshift(l[i]);
// }

// return risultato;