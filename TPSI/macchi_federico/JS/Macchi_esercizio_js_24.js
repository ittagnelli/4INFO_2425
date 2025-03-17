function project_email() {
    var email= prompt("come ti chiami");
    let arr = email.split('.');
    let bur = arr[1].split("@");
    let that_blur = "....";
    let spazio= " ";
    let punto= ".";
    let tot = arr[0] + spazio + that_blur + spazio + bur[1] + punto + arr[2];
    alert(tot)

}

project_email()
