function Continuo(){
   let user = prompt("Inserisci il nome") || alert("Cancelled");
   user == null || user ==  "Admin" || alert("I dont know you");
   user == "Admin" &&  (password = prompt("Inserisci password"));
   password == null || password == "Agnell1no" || alert("Password errata");
   password == "Agnel1no" && alert("Welcome");
}
