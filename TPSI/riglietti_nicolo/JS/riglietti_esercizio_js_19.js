function info(persona){
    for(proprieta in persona){
        console.log('nome: ', proprieta);
        console.log('tipo: ', typeof persona[proprieta]);
        console.log('valore: ', persona[proprieta]);
        console.log('-------');
    }
}


function Persona(nome, cognome, anni, annoNascita, studente){
    (this.nome = nome),
    (this.cognome = cognome),
    (this.anni = anni),
    (this.annoNascita = annoNascita),
    (this.studente = studente)
}

function Libro(titolo, autori, ISBN, annoPubblicazione, argomento){
    (this.titolo = titolo),
    (this.autori = autori),
    (this.ISBN = ISBN),
    (this.annoPubblicazione = annoPubblicazione),
    (this.argomento = argomento)
}


function main(){
   
    let persona = new Persona('francesco', 'rossi', 18, 2000, true)
    let libro = new Libro('manuale C', 'kernighan & ritchie', 8891908231, 1978, 'informatica')

    console.log('oggetto 1: \n');
    info(persona);

    console.log('oggetto 2: \n');
    info(libro);
}

main()
