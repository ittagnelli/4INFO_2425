function obj(ogg) {
    for (let key in ogg) {
        let value = ogg[key];
        console.log(`Nome: ${key}, Tipo: ${typeof value}, Valore: ${typeof value === 'string' ? value.toLowerCase() : value}`);
    }
}

function main() {


    const oggetto = {
        h: 5,
        nome: "grinch",
        m: 45,
        s: 30,
        valido: true
    };

    obj(oggetto);
}

main();