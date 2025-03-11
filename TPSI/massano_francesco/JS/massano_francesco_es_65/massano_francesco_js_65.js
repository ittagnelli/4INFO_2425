let utente = {
    nome: "Jon",
    role: "user"
}
let {nome,role, id_admin = false} = utente;
console.log(nome,role,id_admin);let {id_admin: stato = false} = utente;
