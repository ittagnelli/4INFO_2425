function minoreOrario (ora1, ora2, ora3){
    function secondi(orario){
        return orario.h * 3600 + orario.m * 60 + orario.s;
    }

    const seconds1 = secondi(ora1);
    const seconds2 = secondi(ora2);
    const seconds3 = secondi(ora3);

    if (seconds1 <= seconds2 && seconds1 <= seconds3){
        return ora1
    }
    else if (seconds2 <= seconds1 && seconds2 <= seconds3){
        return ora2;
    }
    else{
        return ora3;
    }
}

function main(){
    const orario1 = {h: 10, m: 30, s: 15 };
    const orario2 = {h: 8, m: 45, s: 30 };
    const orario3 = {h: 10, m: 15, s: 45 };

    const orarioMinore1 = minoreOrario(orario1, orario2, orario3);
    console.log("L'orario minore tra i tre è:", orarioMinore1);

    const orario4 = { h: 5, m: 0, s: 0 };
    const orario5 = { h: 13, m: 15, s: 15 };
    const orario6 = { h: 9, m: 45, s: 0 };

    const orarioMinore2 = minoreOrario(orario4, orario5, orario6);
    console.log("L'orario minore tra il secondo set è:", orarioMinore2);

}

main();

