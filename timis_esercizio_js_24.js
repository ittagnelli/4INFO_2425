function protect_mail(email) {
    let r1 = email.indexOf(".");
    let r2 = email.indexOf("@");
    let p1 = email.replace(email.slice(r1, r2), "...");
    return p1;
}

function main() {
    console.log(protect_mail("vasile.timis@gmail.com"));
}

main();
