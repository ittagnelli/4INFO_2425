export const capitalize = (str) => {
    x = str.split("")
    y = ""
    for (let i = 0; i < x.length; i++) {
        if (i == 0) {
            y = y.concat(x[i].toUpperCase)
        }
        else{
            y = y.concat(x[i])
        }
    }    
    y = str    
}