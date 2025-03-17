export const map_arr = (l, n) => {
    let array = l.map((numero) => {
        return numero %n === 0 ? 0 : numero;
});
        return array;
};
//let array = l.map((numero) => {
    //         if(numero %n == 0){
    //             return 0;
    //         }
    //         else{
    //             return numero;
    //         }
    //     })
    //  return array;