function minore(orario1, orario2, orario3) {
    let data1 = new Date();
    let data2 = new Date();
    let data3 = new Date();

    data1.setHours(orario1.ore);
    data1.setMinutes(orario1.minuti);
    data1.setSeconds(orario1.secondi);

    data2.setHours(orario2.ore);
    data2.setMinutes(orario2.minuti);
    data2.setSeconds(orario2.secondi);

    data3.setHours(orario3.ore);
    data3.setMinutes(orario3.minuti);
    data3.setSeconds(orario3.secondi);

    return data1 > data2 && data1 > data3 ? `orario1 è l'orario maggiore ${data1}` : data2 > data3 ? `orario2 è l'orario maggiore ${data2}` : `orario3 è l'orario maggiore ${data3}`;
}

let Orario = function(ore, minuti, secondi) {
    (this.ore = ore),
    (this.minuti = minuti),
    (this.secondi = secondi);
}

let orario1 = new Orario(5, 23, 17);
let orario2 = new Orario(7, 30, 14);
let orario3 = new Orario(10, 2, 40);

console.log(minore(orario1, orario2, orario3));

orario1 = new Orario(8, 3, 7);
orario2 = new Orario(2, 57, 9);
orario3 = new Orario(1, 42, 12);

console.log(minore(orario1, orario2, orario3));