export const reverse = (l) => {
    //INSERISCI QUI IL TUO CODICE

    // let res = [];
    // l.map((item) => res.unshift(item))
    // res.unshift(res.reduce((acc,current) => acc + current, 0))
    // return res

    let res = [];
    l.map(item => res.splice(0,0,item))
    res.splice(0,0,l.reduce((acc,curr)=>acc+curr,0))
    return res

}


