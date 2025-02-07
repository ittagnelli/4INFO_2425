function premuto(){
    let user= prompt("login")||alert('Canceled')
    user==null||user == "Admin"||alert('i dont know you')
    user=="Admin" && (pass = prompt("password"))
    pass==null||pass == "Agnell1no"||alert('sbagliata')
    pass == "Agnel1no" && alert('Welcome!')
  
}