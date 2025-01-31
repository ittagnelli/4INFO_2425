let Orario = function (h, m, s) {
    (this.ore = h),
    (this.min = m),
    (this.sec = s)
}

function toMs(orario) {
    return (orario.ore * 3600000) + (orario.min * 60000) + (orario.sec * 1000)
}

function toS(orario) {
    return (orario.ore * 3600) + (orario.min * 60) + orario.sec
}

function toM(orario) {
    return (orario.ore * 60) + orario.min + (orario.sec / 60);
}

function toH(orario) {
    return orario.ore + (orario.min / 60) + (orario.sec / 3600)
}

function distanza(o1, o2) {
    console.log('Distanza in millisecondi:', toMs(o1) > toMs(o2) ?  (toMs(o1) - toMs(o2)) : (toMs(o2) - toMs(o1)))
    console.log('Distanza in secondi:', toMs(o1) > toMs(o2) ?  (toS(o1) - toS(o2)) : (toS(o2) - toS(o1)))
    console.log('Distanza in minuti:', toMs(o1) > toMs(o2) ?  (toM(o1) - toM(o2)) : (toM(o2) - toM(o1)))
    console.log('Distanza in ore:', toMs(o1) > toMs(o2) ?  (toH(o1) - toH(o2)) : (toH(o2) - toH(o1)))
}


function main() {
    distanza(new Orario(10,10,3), new Orario(12,10,1));
    distanza(new Orario(0,10,3), new Orario(10,10,1));
}

main()