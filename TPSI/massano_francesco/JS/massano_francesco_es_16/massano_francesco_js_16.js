function orarioMaggiore(o1,o2,o3){
    let o1Ms = (o1.h * 3600000 ) + (o1.m * 60000 ) + (o1.s * 1000);
    let o2Ms = (o2.h * 3600000 ) + (o2.m * 60000 ) + (o2.s * 1000);
    let o3Ms = (o3.h * 3600000 ) + (o3.m * 60000 ) + (o3.s * 1000);

    if(o1Ms > o2Ms && o1Ms > o3Ms){
        return o1Ms;
    }
    if(o2Ms > o1Ms && o2Ms > o3Ms){
        return o2Ms
    }
    if(o3Ms > o1Ms && o3Ms > o2Ms){
        return o3Ms;
    }

}




function main(){

const orario1 = {h:9,m:30,s:40};
const orario2 = {h:7,m:40,s:30};
const orario3 = {h:4,m:20,s:50};
let orario1Ms = (orario1.h * 3600000 ) + (orario1.m * 60000 ) + (orario1.s * 1000);
let orario2Ms = (orario2.h * 3600000 ) + (orario2.m * 60000 ) + (orario2.s * 1000);
let orario3Ms = (orario3.h * 3600000 ) + (orario3.m * 60000 ) + (orario3.s * 1000);

let risultato1 = orarioMaggiore(orario1,orario2,orario3);

if(risultato1 == orario1Ms){
    console.log("L'orario maggiore è l'uno");
}
if(risultato1 == orario2Ms){
    console.log("L'orario maggiore è il due");
}
if(risultato1 == orario2Ms){
    console.log("L'orario maggiore è il tre");
}

const orario4 = {h:12,m:30,s:40};
const orario5 = {h:7,m:40,s:30};
const orario6 = {h:15,m:20,s:50};
let orario4Ms = (orario4.h * 3600000 ) + (orario4.m * 60000 ) + (orario4.s * 1000);
let orario5Ms = (orario5.h * 3600000 ) + (orario5.m * 60000 ) + (orario5.s * 1000);
let orario6Ms = (orario6.h * 3600000 ) + (orario6.m * 60000 ) + (orario6.s * 1000);

let risultato2 = orarioMaggiore(orario4,orario5,orario6);

if(risultato2 == orario4Ms){
    console.log("L'orario maggiore è il quarto");
}
if(risultato2 == orario5Ms){
    console.log("L'orario maggiore è il quinto");
}
if(risultato2 == orario6Ms){
    console.log("L'orario maggiore è il sesto");
}




}

main()