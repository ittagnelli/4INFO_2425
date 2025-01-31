function protect_mail(email){
    primo_punto = email.indexOf(".")
    prima_chiocciola = email.indexOf("@")
    tutto = email.slice(primo_punto, prima_chiocciola)
    finale = email.replace(tutto, "...")
    return finale;
}

function main(){
    console.log(protect_mail("alexandru.pavalean@istitutoagnelli.it"))
}

main()