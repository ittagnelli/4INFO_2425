function differenza(orario1, orario2) {
    let data1 = new Date();
    let data2 = new Date();

    data1.setHours(orario1.ore);
    data1.setMinutes(orario1.minuti);
    data1.setSeconds(orario1.secondi);

    data2.setHours(orario2.ore);
    data2.setMinutes(orario2.minuti);
    data2.setSeconds(orario2.secondi);

    let ms = data1 > data2 ? data1 - data2 : data2 - data1;

    return ms;
}

function stampa() {
    console.log(`La differenza è di:`);
    console.log(`${ms} millisecondi`);
    console.log(`${Math.round(ms / 1000)} secondi`);
    console.log(`${Math.round(ms / 60000)} minuti`);
    console.log(`${Math.round(ms / 3600000)} ore`);
}

let Orario = function(ore, minuti, secondi) {
    (this.ore = ore),
    (this.minuti = minuti),
    (this.secondi = secondi);
};

let orario1 = new Orario(22, 13, 17);
let orario2 = new Orario(3, 17, 55);

let ms = differenza(orario1, orario2);

stampa();

orario1 = new Orario(5, 45, 23);
orario2 = new Orario(12, 3, 44);

ms = differenza(orario1, orario2);

stampa();