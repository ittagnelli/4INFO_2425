export const prod_quad = (n)=>{
    let prodotti=n.reduce((acc,current)=>acc*current**2,1)
    return prodotti;
}   
console.log(prod_quad([1,2,3]))