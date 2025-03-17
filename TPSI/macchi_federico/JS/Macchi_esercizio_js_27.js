function capitalize_all() {
    var frase= "ciamo mondo la terra gira!!!" ;
    let frase1 = frase.replaceAll( "c" , "C" );
    let frase2 = frase1.replace( "mon" , "Mon" );
    let frase3 = frase2.replaceAll( "l" , "L" );
    let frase4 = frase3.replaceAll( "t" , "T" );
    let frase5 = frase4.replaceAll( "g" , "G" );
    alert(frase5)

}

capitalize_all()



