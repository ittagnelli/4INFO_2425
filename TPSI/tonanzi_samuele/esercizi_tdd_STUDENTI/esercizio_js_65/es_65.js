function main(){
let utente = {
    "nome": "jon",

    "role": "user"
}
let {nome,role, is_admin = false} = utente;
console.log(`nome: ${nome}, role: ${role}, admin? ${is_admin}`); 
}
main()