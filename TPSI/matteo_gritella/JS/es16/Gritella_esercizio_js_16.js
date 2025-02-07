function orari(primo,secondo,terzo) {
    function calcolo({o,m,s}) {
        return o*60*60+m*60+s; 
    }

    constt1 = calcolo(primo);
    constt2= calcolo(secondo);
    constt3 = calcolo(terzo);
    if (constt1 < constt2 && constt1 < constt3) {
        return constt1;
    }
    if (constt2 < constt1 && constt2 < constt3) {
        return constt2;

    } else {
        return constt3;

    }

}


function main() {
    const primo = {
        o: 3,
        m: 20,
        s: 15
    };


    const secondo = {
        o: 2,
        m: 40,
        s: 4
    };

    const terzo = {
        o: 21,
        m: 21, 
        s: 59
    }; 

    console.log(orari(primo,secondo,terzo));


}

main()