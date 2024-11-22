function login(){
    let password;
    let username = prompt("login:") || alert('Canceled');
    username == null || username == 'Admin' || alert("I don't know you");
    username == 'Admin' && (password = prompt('Password:')) || alert('Canceled');
    password == null || password == 'Agnell1no' || alert('Wrong password');
    password == 'Agnell1no' && alert('Welcome!');
}