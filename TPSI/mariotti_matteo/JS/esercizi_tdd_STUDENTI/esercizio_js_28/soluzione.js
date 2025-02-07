export const upper_case = (str) => {
    let x = str.split(" ")
    let y = ""

    for (let i = 0; i < x.length; i++){
        x[i] = x[i].toUpperCase();
        y = y.concat(x[i]);
        if (i < x.length - 1){
            y = y.concat(" ");
        }
        console.log(y);
    }
    str = y;
    console.log(y);
    return str;
}

