let ciparuSkaits;
let variantuSkaits = 5;
// let papildusVards;
let tabulasRindas = document.querySelector('.rindas');

const vardi1 = ['spavlains', 'milzīgs', 'jautrs', 'jocīgs', 'interesants'];
const vardi2 = ['gurķis', 'spainis', 'akmens', 'helikopters', 'sviestmaize'];
const vardi3 = ['skrien', 'peld', 'dejo', 'lido', 'smejas'];


function randFunc(maxCipars) {
    let random1 = Math.floor(Math.random() * maxCipars); // math.floor noapaļo uz leju
    return random1
}

function generet() {

    tabulasRindas.innerHTML +=``;

for (let i = 0; i < variantuSkaits; i++) {
    // ciklā ieliek paroles veidošanu un izdruku
    let parole = vardi1[0]+vardi2[0]+vardi3[0];
    console.log(parole);

    let rand1 = randFunc(vardi1.length);
    let rand2 = randFunc(vardi2.length);
    let rand3 = randFunc(vardi3.length);

    let parole1 = vardi1[rand1];
    let parole2 = vardi2[rand2];
    let parole3 = vardi3[rand3];

    parole=parole1+parole2+parole3;

    tabulasRindas.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${parole}</td>
    </tr>` // pievieno +  
    
        }
    }
