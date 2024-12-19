let Automobile = function (pp, speed, speedR, on) {
    this.pp = pp,
    this.speed = speed,
    this.speedR = speedR,

    this.enumera = () => {
        let key = Object.keys(this);

        for(let i = 0; i < key; i++) {
            console.log(this.key);
        }
    },

    this.setPeople = () => {
        let people = speed > 0 ? pp : +prompt('Inserisci persone: ');
        people < 0 || people > 5 ? 
        console.log('Troppe persone inserite.') : console.log(people);

        this.enumera();
    },

    this.setSpeed = () => {
        let speed = +prompt('Inserisci velocità');
        speed < 0 || speed > 180 && speed > speed + 30 ? 
        console.log('Velocità non valida.') : console.log(speed);

        this.enumera();
    },

    this.addSpeedR = () => {
        speedR = on == true && speedR > 6 ? 6 : speedR + 1;
        this.enumera();
    },

    this.removeSpeedR = () => {
        speedR = on == true && speedR == 1 ?  1 : speedR - 1;
        this.enumera();
    },

    (this.turn = () => {
        on = !on;
        console.log(on == true ? `L'automobile è accesa.` : `L'automobile è spenta.`);
        this.enumera();
    });
}

function main() {
    let panda = new Automobile(2, 30, 2, false);
    panda.enumera(panda);
    panda.setPeople();
    panda.addSpeedR();
    panda.removeSpeedR();
    panda.removeSpeedR();
    panda.turn();
    panda.turn();

    panda.enumera();
}

main()