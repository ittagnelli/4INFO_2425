export const special_concat = (str1, str2) => {
    if (str1 === '' || str2 === '' || str1.indexOf(" ") == 0 || str2.indexOf(" ") == 0){
        return 'parole non adatte';
    }
    else{
        str1[0] = str2[0]
        str2[0] = str1[0]
        return str1 + str2;
    }
 };
 