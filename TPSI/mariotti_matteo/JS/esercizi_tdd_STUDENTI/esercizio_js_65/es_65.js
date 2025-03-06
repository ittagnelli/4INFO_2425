const user = {
    nome: 'Mario',
    role: 'Developer'

};

const { nome, role, isAdmin: is_admin = false } = user;

console.log(nome); // 'Mario'
console.log(role); // 'Developer'
console.log(is_admin); // false