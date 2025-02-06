export const protect_email = (email) => {
   //INSERISCI QUI IL TUO CODICE
   return email.replace(email.substring(email.indexOf('.'), email.indexOf('@')), '....');
};
