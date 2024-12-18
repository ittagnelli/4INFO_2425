function object(ore, minuti, secondi) {
    this.att1 = att1,
    this.att2 = att2,
    this.att3 = att3,
    this.att4 = att4,
    this.att5 = att5;
  }
  
  function printa(att1,att2,att3,att4,att5) {
    let oggetto = new object(att1, att2, att3, att4, att5);
    atts = Object.keys(object)
    for (let i = 0; i < atts.length; i++) {
        console.log(atts[i])
        if (typeof Object.values(oggetto[atts[i]]) != "string")
            console.log(oggetto[atts[i]])
        else
            console.log(oggetto[atts[i]].toLowerCase());
        console.log(typeof Object.values(oggetto[atts[i]]))
    }
  }
  
  console.log(printa(5,4,3,2,1));
  console.log(printa(5,"TEST",3,2,1));

  