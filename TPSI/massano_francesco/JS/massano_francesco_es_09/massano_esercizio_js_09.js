function login(){
    let user = prompt("come ti chiami?") || alert("canceled");
    user == null || user  == 'Admin' || alert("i don't know you");
    user == 'Admin' && (password = prompt("password"));
    user == null || password == null || password == "Agnellino" || alert("wrong password");
    password == "Agnellino" && alert("welcome");
}

