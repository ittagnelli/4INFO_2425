function abbreviazione() {

    var nome= prompt("come ti chiami");
    let arr = nome.split(' ');
    let spazio= " ";
    let punto= ".";
    let lettera= arr[1];
    let tot = arr[0] + spazio + lettera[0].toUpperCase() + punto;
    alert(tot) 
}

abbreviazione()