function login(){
    let username = prompt("Inserisci il nome dell'utente: ") || alert(`canceled`); 
    username == null || username == `Admin` || alert(`I don't know you`);
    username == "Admin" && (password = prompt(`Password`));
    password == null || password == "Agnell1ino" || allert(`Wrong password`);
    password == "Agnell1ino" && alert(`Welcome`);
}
