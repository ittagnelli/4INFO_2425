let Time = function (h, m, s) {
    this.ore = h;
    this.minuti = m;
    this.secondi = s;
}

function minor(time1, time2, time3) {
    let date1 = new Date();
    let date2 = new Date();
    let date3 = new Date();

    date1.setHours(time1.ore);
    date1.setMinutes(time1.minuti);
    date1.setSeconds(time1.secondi);

    date2.setHours(time2.ore);
    date2.setMinutes(time2.minuti);
    date2.setSeconds(time2.secondi);

    date3.setHours(time3.ore);
    date3.setMinutes(time3.minuti);
    date3.setSeconds(time3.secondi);

    if (date1 > date2 && date1 > date3)
        return `time1 è l'orario maggiore ${date1}`; 
    else if (date2 > date3 && date2 > date1)
        return `time2 è l'orario maggiore ${date2}`;

    return `time3 è l'orario maggiore ${date3}`;
}

let time1 = new Time(1, 12, 17);
let time2 = new Time(7, 9, 1);
let time3 = new Time(3, 2, 1);

console.log(minor(time1, time2, time3));

time1 = new Time(0, 21, 12);
time2 = new Time(3, 33, 14);
time3 = new Time(17, 2, 40);

console.log(minor(time1, time2, time3));