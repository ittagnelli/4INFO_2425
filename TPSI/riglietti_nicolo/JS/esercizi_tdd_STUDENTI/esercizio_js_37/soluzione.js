export const rm_string = (s, r) => {
    let parole = s.split(' ');

    let s2 = [];

    for(let i = 0; i < parole.length; i++){
        if(parole[i] != r)
            s2.push(parole[i])
    }

    return s2.join(' ').trim()
};