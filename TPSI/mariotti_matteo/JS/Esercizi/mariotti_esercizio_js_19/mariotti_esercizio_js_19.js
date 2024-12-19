function stampa(macchina) {
    for(let key in macchina){
        let tipo = typeof macchina[key]
        if (tipo === String) {
            macchina[key] = macchina[key].toLowerCase();
        }
        console.log(tipo, ":", macchina[key])

    }
    
}

function main() {
    const macchina = {
        auto: "Fiat",
        modello: "panda",
        posti: 4,
        motore: "benzina",
        cavalli: 70
    }
    nome, tipo, valore = stampa(macchina);


}


main()