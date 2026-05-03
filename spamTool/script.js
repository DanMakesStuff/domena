let vystup = document.getElementById("vystup");
let vstupSlov = document.getElementById("slova");
let nasobitel = 2;

function nasobitelSet(tohle) {
    nasobitel = tohle.value;
}


function pocetSlov(tohle) {
    let pocetSlov = tohle.value;
    vstupSlov.innerHTML = "";
    for (let i = 0; i < pocetSlov; i++) {
        vstupSlov.innerHTML += `<input class="slovo" type="text" value="a${i}" name="" id="${i}">`;
    }
}

function vypisSlova() {
    vystup.innerHTML = "";
    let slova = Array.from(document.getElementsByClassName("slovo"));
    console.log(slova);
    slova.forEach(element => {
        
        for (let a = 0; a < nasobitel; a++) {
            vystup.innerHTML += element.value + " "; 
        }
        /*
        vystup.innerHTML += element.value + " ";
        */
    });
}