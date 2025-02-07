function untokenize(stringa){
    stringa = stringa.replaceAll(" ", "-");
    console.log(stringa);
}

let stringa = "nel mezzo del cammin di nostra vita";
untokenize(stringa);