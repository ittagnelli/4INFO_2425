function capitalize(stringa) {
    lettera_iniziale = stringa[0].toUpperCase()
    stringa_finale = stringa.replace(stringa[0], lettera_iniziale)
    return stringa_finale
}

function main(){
    console.log(capitalize('alexandru Pavalean!!!'))
}

main()