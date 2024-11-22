function login(){
    let username = prompt('Username') || alert('cancel');
    username == null || username == 'Admin' || alert('I dont know you');
    username == 'Admin' && (password =  prompt('Password'))
    password == null || password == 'Agnell1no' || alert('Wrong Password');
    password == 'Agnell1no' && alert('Welcome')
    }