function begin() {
    let username = prompt("Inserire Username");

    if(username != "Admin") {
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
    }

    alert("Welcome!");
}