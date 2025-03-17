
function r() {

let utente = { nome: "Jon", role: "user", isAdmin: false }; 

let { nome, role, isAdmin = false } = utente; 

let is_admin = isAdmin;
}

r()