export const upper_case = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        let carattere = str.charCodeAt(i);
        if(carattere > 96 && carattere < 123){
            let carattereMaiuscolo = String.fromCharCode(carattere - 32);
            result += carattereMaiuscolo;
        }
        else{
            result += str[i];
        }
        
    }

    return result;
}

