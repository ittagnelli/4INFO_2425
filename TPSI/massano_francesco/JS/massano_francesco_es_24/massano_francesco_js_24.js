function protectEmail(email){
    let [username, continuo] = email.split("@");
    let [nome,cognome] = username.split(".");
    console.log(nome + "......" + "@"+ continuo);
}

let email = "francesco.massano@gmail.com";

protectEmail(email);