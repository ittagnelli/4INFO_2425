let user = {
    name: "mario",
    surname: "rossi"
}

let keys = Object.keys(user);

for(let i = 0; i < keys.length; i++){

    let key = keys[i]
    let value = user[key]
    console.log("la chiave", key, "ha valore", value);
}

