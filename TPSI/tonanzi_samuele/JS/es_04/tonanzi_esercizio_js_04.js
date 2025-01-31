function modifica_stile(){
    let h1 = document.getElementsByTagName('h1');
    
    
    for(let i = 0;i < h1.length; i++){
        h1[i].style.color = "red"; 
    }

    let h2 = document.getElementsByTagName("h2");

    for(let i = 0; i < h2.length; i++){
        h2[i].style.color = "blue";
        h2[i].style.backgroundColor = "yellow";
        h2[i].style.fontSize = "40px";  
        h2[i].innerText = h2[i].innerText.toUpperCase();
    }
    
    
    
    
   
    
    

   
    let p1 = document.getElementById("par1");
        p1.style.color = "red";

    let p4 = document.getElementById("par4");
        p4.style.color = "red";
    
    let p2 = document.getElementById("par2");
    p2.style.backgroundColor = "light green";

    
    let p5 = document.getElementById("par5");
    p5.style.backgroundColor = "light green";


    let p8 = document.getElementById("par8");
    p8.style.backgroundColor = "light green";


    let p3 = document.getElementById("par3");
    p3.innerText= p3.innerText.toUppercase();
    p3.style.backgroundColor = "light blue";


    let p6 = document.getElementById("par6");
    p6.innerText = p6.innerText.toUppercase();


    let p7 = document.getElementById("par7");
    p7.style.font = "italic";

}