
let galerie = document.getElementById("dalerie-dan");
let seznamObrazku = document.getElementById("galerie-dan-images")
let pocetObrazku = seznamObrazku.childElementCount

console.log(pocetObrazku)

let aktivniCislo = 0;
let aktivniObrazek = seznamObrazku.children[aktivniCislo];
let druhyObrazek = seznamObrazku.children[aktivniCislo + 1];
let nasledujiciObrazek = seznamObrazku.children[pocetObrazku-1];
nasledujiciObrazek.classList.toggle("nasledujici");
let titulek = document.querySelector(".galerie-outer-dan > .titulek > .info")


function refresh(){
    aktivniObrazek.classList.toggle("aktivni");
    if(aktivniCislo < (pocetObrazku-1)){
        druhyObrazek = seznamObrazku.children[aktivniCislo + 1];
    }
    else{
        druhyObrazek = seznamObrazku.children[0];
    }
    druhyObrazek.classList.toggle("druhy");
}

function dalsi(){
    tecka();
    console.log(aktivniObrazek)
    refresh()
    if(aktivniCislo < (pocetObrazku-1)){
        aktivniCislo++;
refreshNasledujici();
    }
    else{
        aktivniCislo = 0;
        nasledujiciObrazek.classList.toggle("nasledujici");
        nasledujiciObrazek = seznamObrazku.children[pocetObrazku-1]
        nasledujiciObrazek.classList.toggle("nasledujici");
    }
    aktivniObrazek = seznamObrazku.children[aktivniCislo];
    refresh()
    tecka();
    titulek.innerHTML = aktivniObrazek.getAttribute("alt");
}
let pocitadlo = document.getElementById("counter");
for (let index = 0; index < pocetObrazku; index++) {
    pocitadlo.innerHTML+= `<div onClick="prejitNa(` + index + `)"></div>`;
}

function predchozi(){
    tecka();
    if(aktivniCislo == 0){
        aktivniCislo = pocetObrazku-1;
        nasledujiciObrazek.classList.toggle("nasledujici")
        nasledujiciObrazek= seznamObrazku.children[pocetObrazku-2];
        nasledujiciObrazek.classList.toggle("nasledujici");
        refreshDruhy();
        aktivniObrazek.classList.toggle("aktivni");
        aktivniObrazek = seznamObrazku.children[pocetObrazku-1];
        aktivniObrazek.classList.toggle("aktivni");
    }
    else if (aktivniCislo == (pocetObrazku-1)){
        aktivniCislo--
        refreshNasledujici();
        refreshDruhy();
        aktivniObrazek.classList.toggle("aktivni");
        aktivniObrazek = seznamObrazku.children[aktivniCislo];
        aktivniObrazek.classList.toggle("aktivni");
    }
    else if (aktivniCislo == 2){
        aktivniCislo--
        refreshNasledujici();
        refreshDruhy();
        aktivniObrazek.classList.toggle("aktivni");
        aktivniObrazek = seznamObrazku.children[aktivniCislo];
        aktivniObrazek.classList.toggle("aktivni");
    }
    else if (aktivniCislo == 1){
        console.log("ELSE")
        aktivniCislo--;
        refreshDruhy();
        refreshAktivni();
        nasledujiciObrazek.classList.toggle("nasledujici");
        nasledujiciObrazek = seznamObrazku.children[pocetObrazku-1]
        nasledujiciObrazek.classList.toggle("nasledujici");
    }
    else{
        console.log("ELSE")
        aktivniCislo--;
        refreshDruhy();
        refreshAktivni();
        refreshNasledujici();
    }
    tecka();
    titulek.innerHTML = aktivniObrazek.getAttribute("alt");
}
function prejitNa(pozadovaneCislo){
    tecka();
    druhyObrazek.classList.toggle("druhy");
    aktivniObrazek.classList.toggle("aktivni");
    nasledujiciObrazek.classList.toggle("nasledujici");
    aktivniCislo = pozadovaneCislo;
    if (aktivniCislo == 0){
        druhyObrazek = seznamObrazku.children[aktivniCislo+1]
        aktivniObrazek = seznamObrazku.children[aktivniCislo]
        nasledujiciObrazek = seznamObrazku.children[pocetObrazku-1]
    }
    else if(aktivniCislo == (pocetObrazku-1)){
        druhyObrazek = seznamObrazku.children[0]
        aktivniObrazek = seznamObrazku.children[aktivniCislo]
        nasledujiciObrazek = seznamObrazku.children[aktivniCislo-1]
    }
    else {
        druhyObrazek = seznamObrazku.children[aktivniCislo+1]
        aktivniObrazek = seznamObrazku.children[aktivniCislo]
        nasledujiciObrazek = seznamObrazku.children[aktivniCislo-1]
    }
    druhyObrazek.classList.toggle("druhy");
    aktivniObrazek.classList.toggle("aktivni");
    nasledujiciObrazek.classList.toggle("nasledujici");
    tecka();
    titulek.innerHTML = aktivniObrazek.getAttribute("alt");
}
function refreshDruhy(){
    druhyObrazek.classList.toggle("druhy");
    druhyObrazek = aktivniObrazek
    druhyObrazek.classList.toggle("druhy");
}
function refreshAktivni(){
    aktivniObrazek.classList.toggle("aktivni");
    aktivniObrazek = nasledujiciObrazek;
    aktivniObrazek.classList.toggle("aktivni");
}
function refreshNasledujici(){
    nasledujiciObrazek.classList.toggle("nasledujici");
    nasledujiciObrazek = seznamObrazku.children[aktivniCislo-1]
    nasledujiciObrazek.classList.toggle("nasledujici");
}
function tecka(){
    pocitadlo.children[aktivniCislo].classList.toggle("active")
}
tecka();
refresh();
titulek.innerHTML = aktivniObrazek.getAttribute("alt");


/*

let seznamGalerii = [];

function zapsatGalerii(galerie){
    seznamGalerii.push(galerie);
    console.log(seznamGalerii)
}

*/