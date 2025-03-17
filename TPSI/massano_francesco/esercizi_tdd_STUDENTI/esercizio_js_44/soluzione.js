export const ordina = (l) => {
    let arrayDecrescente = l.sort((item1,item2) => {
        if(item1.title.toLowerCase() > item2.title.toLowerCase()){ 
            return -1;
        }
        else if(item1.title.toLowerCase() < item2.title.toLowerCase()){
            return 1;
        }
        else{
            return 0;
        }
    });
    return arrayDecrescente;
};
