function abbreviazione(stringa){
    let nomi = stringa.split(' ');
    let nome = nomi[0];
    let cognome = nomi[1];
    let abbreviazione = `${nome} ${cognome.charAt(0)}.`;
    return abbreviazione;
}

function main(){
    console.log(abbreviazione("Antonio Mancuso"))
}

main()