const user = {
    nome: 'Mario',
    role: 'Developer'

};

const { nome, role, isAdmin: is_admin = false } = user;

console.log(nome);
console.log(role); 
console.log(is_admin); 