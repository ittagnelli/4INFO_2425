let Orario = function(h, m, s) {
    (this.ore = h),
    (this.minuti = m),
    (this.secondi = s);
};

function ms(orario1, orario2) {
    let milliseconds1 = ((orario1.ore * 60 + orario1.minuti) * 60 + orario1.secondi) * 1000;
    let milliseconds2 = ((orario2.ore * 60 + orario2.minuti) * 60 + orario2.secondi) * 1000;

    let hD = orario1.ore > orario2.ore ? orario1.ore - orario2.ore : orario2.ore - orario1.ore;
    let mD = orario1.minuti > orario2.minuti ? orario1.minuti - orario2.minuti : orario2.minuti - orario1.minuti;
    let sD = orario1.secondi > orario2.secondi ? orario1.secondi - orario2.secondi : orario2.secondi - orario1.secondi;
    let msD = milliseconds1 > milliseconds2 ? milliseconds1 - milliseconds2 : milliseconds2 - milliseconds1;

    return {hD, mD, sD, msD};
}

function main() {
    let orario1 = new Orario(3, 54, 30);
    let orario2 = new Orario(2, 36, 2);
    let differenze = ms(orario1, orario2);
    console.log(`Differenza ore: ${differenze.hD}, differenza minuti: ${differenze.mD}, 
        differenza secondi: ${differenze.sD}, differenza millisecondi: ${differenze.msD}`);
}

main();