function minore(orario1, orario2, orario3){
    secondi1 = (orario1.h * 3600) + (orario1.m * 60) + orario1.s
    secondi2 = (orario2.h * 3600) + (orario2.m * 60) + orario2.s
    secondi3 = (orario3.h * 3600) + (orario3.m * 60) + orario3.s

    if (secondi1 < secondi2 && secondi1 < secondi3) {
        return console.log(`L'orario più piccolo è il primo`)
        }
    if (secondi2 < secondi1 && secondi2 < secondi3) {
        return console.log(`L'orario più piccolo è il secondo`)
        }
    if (secondi3 < secondi2 && secondi3 < secondi1) {
        return console.log(`L'orario più piccolo è il terzo`)
        }
}

function main(){
    orario1 = {h : 10, m : 30, s : 0};
    orario2 = {h : 9, m : 0, s : 0};
    orario3 = {h : 9, m : 30, s : 0};

    console.log(minore(orario1, orario2, orario3));

}

main()