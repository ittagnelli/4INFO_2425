export const rm_string = (s, r) => {
    //INSERISCI QUI IL TUO CODICE
    let words = s.split(' ');
    let str = [];

    for(let i = 0; i < words.length; i++){
        if(words[i] != r)
            str.push(words[i])
    }

    return str.join(' ').trim()
};