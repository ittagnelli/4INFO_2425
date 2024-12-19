function stampaggio(persona){
    for(attributo in persona){
        console.log('nome: ', attributo);
        console.log('tipo: ', typeof persona[attributo]);
        console.log('valore: ', persona[attributo]);
    }
}


function tipo(nome, cognome, anni, annoNascita){
    (this.nome = nome),
    (this.cognome = cognome),
    (this.anni = anni),
    (this.annoNascita = annoNascita)
}


function main(){

    let persona =  new tipo('alexandru', 'pavalean', 17, 2007)
    stampaggio(persona);
}

main()