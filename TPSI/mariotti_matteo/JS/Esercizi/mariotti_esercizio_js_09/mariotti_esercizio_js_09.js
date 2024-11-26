// function login(){

//     let nome_utente = prompt("Inserire il nome utente: ", "") || alert("Canceled");
//     let check = nome_utente === "Admin" || alert("I don't know you");
//     check && password();

// }  


// function password(){
//     let password = prompt("Inserire password: ", "") || alert("Canceled") && password === "Agnell1no" || alert("Wrong password"); 
// }   

function login(){
    let user = prompt("Login") || alert("Canceled");
    user == null || user == "Admin" || alert("I don't know you");
    user == "Admin" && (password = prompt("Password: "));
    password == null || password == "Agnell1no" || alert("Wrong password");
    password == "Agnell1no" && alert("Welcome")
}