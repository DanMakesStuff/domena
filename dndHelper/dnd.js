
    let pozadi = document.body;
    let hps = document.getElementsByClassName("hp");
    let zivotymax = 10;
    let zivotycurrent = 5;
    let hpPrefix = "<div onmouseenter=hpMysNad(this) onmouseleave=hpMysPryc(this) onClick=nastavZivoty(this) class='hp' value='";
    let hpSuffix = "'></div>";
    let items = []
    let invetarContainer = document.getElementById("inventarContainer")
    let kodPostavy = prompt("Zadej svůj unikátní kód zde:")
    let klic = kodPostavy;
    eval(klic);

    //konec inventare

    function suspicious(){
        let cisteX = (event.clientX / window.innerHeight)*0.5;;
        let y = 2.5-(cisteX*15);
        let cisteY = (event.clientY / window.innerHeight)*0.5;;
        let x = 2.5-(cisteY*15);
        logo.style.transform = `rotateZ(${y*3}deg)`+ `rotateY(${y*7}deg)`+ `rotateX(${x*10}deg)`;
        pozadi.style.backgroundPosition = ((y*5)-80) + "px " + ((x * 5) - 80) + "px";
    }
    
    for (let i = 0; i < zivotymax; i ++){
        boxZivotu.innerHTML += hpPrefix + i + hpSuffix;
    }
    function nastavZivoty(tohle, nastavPozice){
        let pozice;
        if (nastavPozice == null){
            pozice = tohle.getAttribute("value");
        }
        else{
            pozice = Number(nastavPozice);
        }

        console.log("pozice je " + pozice);
        console.log("pozice + 1 je " + (Number(pozice) + 1));
        console.log("aktualni zivoty jsou " + zivotycurrent);
        

        /*if (zivotycurrent == 1 && pozice == 0) {
            console.log("Aktuální životy jsou 1 a bylo kliknuto 1. (nulté) políčko")
            zivotycurrent = 0;
            hps[0].classList.remove("full");
        }*/
        
        if (zivotycurrent == (Number(pozice) + 1)) {
            console.log("Test feature " + "bylo kliknuto " + pozice + ". pole")
            zivotycurrent = pozice;
            hps[pozice].classList.remove("full");
        }
        /*else if (zivotycurrent == 1 && pozice == 1) {
            console.log("Aktuální životy jsou 1 a bylo kliknuto 2. (první) políčko")
            hps[0].classList.add("full");
        }*/
        /*else if (zivotycurrent == 1 && pozice == 1) {
            console.log("Aktuální životy jsou 1 a bylo kliknuto 2. (první) políčko")
            hps[0].classList.add("full");
        }*/
        else{
            zivotycurrent = parseInt(pozice) + 1;
            
            console.log("Předchozí podmínky nic nezaznamenaly. Nastavuje se život z pozice " + pozice)
		    for (let i = 0; i <= pozice; i++) {
                console.log("Case1")
	            hps[i].classList.add("full");
	        }
	        for (let j = pozice; j < zivotymax; j++) {
                
                console.log("Case2")
	            hps[j].classList.remove("full");
	        }
            if (tohle !=null) {
                
                console.log("Case3")
	            tohle.classList.add("full");
            }
            
        }
        refreshZivoty(zivotycurrent);
    }
    function hpMysNad(tohle){
        tohle.style.backgroundColor = "#fff7"
        let pozice = tohle.getAttribute("value");
        for (let i = 0; i <= (pozice-1); i++) {
            hps[i].style.backgroundColor = "#fff7";
        }
    }
    function hpMysPryc(tohle){
        let pozice = tohle.getAttribute("value");
        for (let i = 0; i < pozice; i++) {
            hps[i].style.backgroundColor = null;
        }
        tohle.style.backgroundColor = null;
    }


    function refreshZivoty(zivoty){
        pocitadloZivotu.classList.remove("refresh")
        pocitadloZivotu.classList.add("refresh")
        pocitadloZivotu.innerHTML = zivoty;
        console.log("animuji")
    }
    refreshZivoty(zivotycurrent)
    //ITEMS
    function pridejItem(nazev,pocet,obrazek){
        let vec = {
            "id": items.length-1,
            "nazev":nazev,
            "pocet":pocet,
            "obrazek":obrazek,
        }
        items.push(vec); 
    };
    let i = 1;
    function vypisItemy(){
        items.forEach(item => {
            console.log(i + ". s nazvem " + item.nazev+ ", pocet: " + item.pocet+ ", nazev obrazku je: " + item.obrazek)
            i++
        });
        i = 0;
    }
    function vypisInventar() {
        let index = 0;
        invetarContainer.innerHTML = "";
        items.forEach(item => {
            item.id = index;
            index++
            invetarContainer.innerHTML +=
            //Zacatek zapisu
            `
            <div value=${item.id} class="item glass">
                <button class="delete" onclick="smazItem(this)">x</button>
                <div class="nazev">
                    ${item.nazev}
                </div>
                <div id="count" class="itemCount">
                    ${item.pocet}
                </div>
                <img src="${item.obrazek}" alt="">
                <button class="controls" onclick="odeberMnozstvi(this)">
                    -
                </button>
                <button class="controls" onclick="pridejMnozstvi(this)">
                    +
                </button>
            </div>
            `
            //konec zapisu
        });
    }
    function pridejMnozstvi(tohle) {
        let tentoItem = items.find(nejakyItem => nejakyItem.id == tohle.parentElement.getAttribute("value"));
        tentoItem.pocet++;
        vypisInventar();
    }
    function odeberMnozstvi(tohle) {
        let tentoItem = items.find(nejakyItem => nejakyItem.id == tohle.parentElement.getAttribute("value"));
        if(tentoItem.pocet > 1){
            tentoItem.pocet--;
            vypisInventar();
        }
    }
    vypisInventar()
	for (let i = 0; i <= zivotycurrent-1; i++) {
	    hps[i].classList.add("full");
	}

    let ikony = Array.from(document.getElementById("selectIconMenu").children);
    let nastavenaIkona;
    function nastavIkonu(tohle){
        nastavenaIkona = tohle.firstChild.getAttribute("src");
        tohle.parentElement.scrollTo(top);
        ikony.forEach(element => {
            element.classList.remove("selectedItem");
        });
        tohle.classList.add("selectedItem")
        console.log(nastavenaIkona);
    }

    function smazItem(tohle){
        let tentoItem = items.find(nejakyItem => nejakyItem.id == tohle.parentElement.getAttribute("value"));
        items.splice(tentoItem.id,1)
        vypisInventar()
    }
    let inputNazev = document.getElementById("vstupNazev");
let inputMnozstvi = document.getElementById("vstupMnozstvi");

// Execute a function when the user presses a key on the keyboard
inputMnozstvi.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      document.getElementById("pridejItemButton").click();
    }
  });
  inputNazev.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      document.getElementById("pridejItemButton").click();
    }
  });
    function pridejNovyItem(){
        let nazevNovehoItemu = "Nepojmenovaný"
        if (inputNazev.value != "") {
            nazevNovehoItemu = inputNazev.value;
        }
        let mnozstviNovehoItemu = 1;
        if (inputMnozstvi.value != "") {
            mnozstviNovehoItemu = inputMnozstvi.value;
        }
        document.querySelector("#vstupNazev").value = "";
        pridejItem(nazevNovehoItemu,mnozstviNovehoItemu,nastavenaIkona)
        vypisInventar();
    }
function vygenerujKlic() {
    let vygenerovany = "items = [";
    items.forEach(item =>{
        vygenerovany += "{"
        vygenerovany += 'nazev:"' + item.nazev + '",'
        vygenerovany += 'obrazek:"' + item.obrazek + '",'
        vygenerovany += 'pocet:' + item.pocet + "},"
    })
    if (items.length != 0) {
        vygenerovany = vygenerovany.slice(0, -1);
    }
    vygenerovany += '];';
    vygenerovany += "zivoty = " + zivotycurrent + "; pocetZivotu = " + zivotymax + ";"
    console.log(vygenerovany)   
    navigator.clipboard.writeText(vygenerovany);
}

nastavenaIkona = "zelezny_platek.png"

 // Pridani testovaciho itemu
pridejItem("Bramborka","7","brambora.png");
pridejItem("Mrkev","11","mrkev.png");
pridejItem("Plátek Kovu","7","zelezny_platek.png");

// Finalni vypsani inventare a HP bodů
vypisInventar();
