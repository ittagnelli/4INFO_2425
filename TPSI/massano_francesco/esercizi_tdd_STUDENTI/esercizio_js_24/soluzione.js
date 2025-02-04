export const protect_email = (email) => {
   let [username, continuo] = email.split("@");
   let [nome,cognome] = username.split(".");
   let lunghezza = username.length/2;
   if(nome.length == 1){
      return ("..." + "@"+ continuo);
   }
   else{
      let nome2 = nome.substring(0,lunghezza);
      return (nome2 + "..." + "@"+ continuo);
   }

};
