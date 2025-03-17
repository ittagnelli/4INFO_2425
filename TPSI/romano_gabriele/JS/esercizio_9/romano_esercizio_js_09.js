function pass() {
    let password = prompt("Inserire Password") || alert("Canceled");
    password == null || password == "Agnell1no" || alert("Wrong password");
    password == "Agnell1no" && alert("Welcome!");
}

function begin() {
    let username = prompt("Inserire Username") || alert("Canceled");

    username == null || username == "Admin" || alert("I don't know you");

    username == "Admin" && pass();

    /*if(username != "Admin") {
        if(username == null)
            alert("Canceled");
        else
            alert("I don't know you");

        return 0;
    }

    let password = prompt("Inserire Password");

    if(password != "Agnell1no") {
        if(password == null)
            alert("Canceled");
        else
            alert("Wrong password");

        return 0;
    }*/
}