let utente = {
    nome: "Jon",
    role: "user"
}

let {nome , role, is_admin = false} = utente;

console.log(`Nome: ${nome}, Role: ${role}, Admin: ${is_admin}`)