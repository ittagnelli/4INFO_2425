
function login() {
   
    let user = prompt('Login') || alert("Canceled")
    user == null || user == 'Admin' || alert("I do not know you")
    user = "Admin" && (password = prompt("Password"))
    password == null || password == "Agnell1no"|| alert("Canceled")
    password = "Agnell1no" && alert("Welcome")

  
}




login()