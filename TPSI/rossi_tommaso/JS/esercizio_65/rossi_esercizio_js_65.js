let utente = {
    nome: "Jon",
    role: "user"
};

let {nome, role, isAdmin:is_admin} = utente;
is_admin = is_admin ?? false;

console.log(nome, role, is_admin);