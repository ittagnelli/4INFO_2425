
function login() {

    let user = prompt("login") || alert('canceled');
    user == null || user == 'Admin' || alert("I don't know you")
    user == 'Admin' && (password = prompt("password"))
    password == null || password == 'Agnell1no' || alert('wrong password')
    password == 'Agnell1no' && alert('Welcome')
    
}

login()
