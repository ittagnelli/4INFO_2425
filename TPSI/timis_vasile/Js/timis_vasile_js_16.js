function object(Primo,Secondo,Terzo) {
    function calcolo({h,m,s}) {
        return h*3600+m*60+s; 
    }

    constt1 = calcolo(Primo);
    constt2= calcolo(Secondo);
    constt3 = calcolo(Terzo);
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
    const Primo = {
        h: 5,
        m: 45,
        s: 30
    };
    

    const Secondo = {
        h: 1,
        m: 50,
        s: 28
    };

    const Terzo = {
        h: 20,
        m: 25, 
        s: 15
    }; 

    const Primo2 = {
        h: 6,
        m: 45,
        s: 30
    };
    


    const Secondo2 = {
        h: 1,
        m: 30,
        s: 28
    };

    const Terzo2 = {
        h: 23,
        m: 25, 
        s: 15
    }; 
    
    console.log(object(Primo,Secondo,Terzo));

    console.log(object(Primo2,Secondo2,Terzo2));


}

main()