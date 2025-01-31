function login() {
    let username = prompt('Inserire username: ');
    username ||  alert('Cancelled');
    username !== 'Admin' && username && alert('I don`t know you');
    let password = username === null  || username !== 'Admin' || prompt('Inserisci password:') || alert('Cancelled');
    username === null || username !== 'Admin' || password !== 'Agnell1no' && password && alert('Wrong password') || password === null || password === 'Agnell1no' && alert('Welcome!');
}