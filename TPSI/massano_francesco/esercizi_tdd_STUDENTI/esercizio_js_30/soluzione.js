export const tronca = (str, l) => {
    let stringa = '';
    if(str.length <= l){
        return str.slice(0,l);
    }
    else{
        return str.slice(0,l)+'...';
    }

}
