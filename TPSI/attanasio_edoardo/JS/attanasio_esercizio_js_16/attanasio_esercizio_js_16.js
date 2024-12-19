
function calcolaMillisecondi(oggetto){
    return (oggetto.ore * 3600 + oggetto.min * 60 + oggetto.sec) * 1000;
}

function oggettoMinore(oggettoUno, oggettoDue, oggettoTre){
    let msecUno = calcolaMillisecondi(oggettoUno);
    let msecDue = calcolaMillisecondi(oggettoDue);
    let msecTre = calcolaMillisecondi(oggettoTre);

    return msecUno < msecDue && msecUno < msecTre ? msecUno : msecDue < msecTre && msecDue < msecUno ? msecDue : msecTre;//msecTre < msecDue && msecTre < msecUno ? 


}

const tempoUno = {
    ore: 5,
    min: 46,
    sec: 21
};

const tempoDue = {
    ore: 12,
    min: 46,
    sec: 0
};

const tempoTre = {
    ore: 12,
    min: 23,
    sec: 11
};


console.log(oggettoMinore(tempoUno,tempoDue,tempoTre));