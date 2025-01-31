export const capitalize = (str) => {
    if(str == ""){
        return str;
    }
    else{
        let[prima,seconda] = str.split(" ");
        if(seconda == undefined){
            let prima1 = prima.substring(0,1).toUpperCase();
            return (prima1+prima.slice(1));
        }
        else{
            let prima1 = prima.substring(0,1).toUpperCase();
            return (prima1+prima.slice(1) + " " + seconda);
        }

    }

}
