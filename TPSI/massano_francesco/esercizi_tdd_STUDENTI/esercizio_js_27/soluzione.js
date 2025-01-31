export const capitalize_all = (str) => {
   let parole = str.split(" ");
   let inizialiMaiuscole = "";
   for(let i = 0; i < parole.length; i++){
       let lettera = parole[i].substring(0,1).toUpperCase();

       inizialiMaiuscole = inizialiMaiuscole  + " " + (lettera + parole[i].slice(1));
   }
   return  inizialiMaiuscole.slice(1);
}

