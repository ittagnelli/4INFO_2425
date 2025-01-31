function abbreviazione(nomeCognome){
    let [nome, cognome] = nomeCognome.split(" ");
    cognome = cognome.substring(0,1).toUpperCase();
    let nome2 = nome.substring(0,1).toUpperCase();

    console.log(nome2 + nome.slice(1), cognome);
    
}


let nomeCognome = "tommaso rossi";

abbreviazione(nomeCognome);