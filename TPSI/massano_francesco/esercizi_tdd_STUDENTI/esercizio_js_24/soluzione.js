export const protect_email = (email) => {
   let [username, continuo] = email.split("@");
   let [nome,cognome] = username.split(".");
   let nome2 = nome.substring(0,2);
   return (nome2 + "..." + "@"+ continuo);
};
