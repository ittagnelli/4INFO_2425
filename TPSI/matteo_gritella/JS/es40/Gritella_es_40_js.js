export const same = (a1, a2) => {
    if(a1.length == a2.length){
     let u = a1.every((n,i) => n == a2[i]);
     return u;
    }
    else
    {
     return false;
    }
  }