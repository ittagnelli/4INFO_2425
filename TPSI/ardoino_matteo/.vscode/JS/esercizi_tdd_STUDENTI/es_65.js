let utente = {
    nome: "Jon",
    role: "user"
};

let { nome, role, isAdmin = false } = utente;
let is_admin = isAdmin; x