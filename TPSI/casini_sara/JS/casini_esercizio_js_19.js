function informazionePersona(persona){
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

function Libro(titoloLibro, autoriLibro, ISBN, annoPubblicazione, argomento){
    (this.titolo = titoloLibro),
    (this.autori = autoriLibro),
    (this.ISBN = ISBN),
    (this.annoPubblicazione = annoPubblicazione),
    (this.argomento = argomento)
}


function main(){

    let persona = new Persona('sara', 'casini', 17, 2007, true)
    let libro = new Libro('manuale python', 'kernighan', 876688855, 1235, 'informatica')

    console.log('oggetto 1: \n');
    informazionePersona(persona);

    console.log('oggetto 2: \n');
    informazionePersona(libro);
}

main()
