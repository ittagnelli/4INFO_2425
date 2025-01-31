function orario_minore(time, time1,time2){
const tempo1 = time.h * 3600 + time.m * 60 + time.s
const tempo2 = time1.h * 3600 + time1.m * 60 + time1.s
const tempo3 = time2.h * 3600 + time2.m * 60 + time2.s 
console.log(tempo1, tempo2, tempo3)

minimo = Math.min(tempo1, tempo2, tempo3)
console.log(minimo)
// Math.max(time, time1, time2)

console.log("Valore minore: ", )


if(tempo1 == minimo){
    console.log(time)
}
else if (tempo2 == minimo) {
    console.log(time1)
}
else if (tempo3 == minimo) {
    console.log(time2)
}
else{
    console.log("Errore")
}
}

function main(){
    const orari = { // Ho messo un oggetto dentro un oggetto
        orario1: {h: 1, m: 26, s: 30},
        orario2: {h: 1, m: 30, s: 20},
        orario3: {h: 0, m: 12, s: 30}
    }
    const orari1 = { // Ho messo un oggetto dentro un oggetto
        orario1: {h: 2, m: 16, s: 10},
        orario2: {h: 1, m: 32, s: 21},
        orario3: {h: 0, m: 21, s: 47}
    }

    orario_minore(orari.orario1, orari.orario2, orari.orario3) // Chiamo funzione orario minore
    orario_minore(orari1.orario1, orari1.orario2, orari1.orario3) // Chiamo funzione orario minore


}

main()