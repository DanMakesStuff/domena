
    function kontakty(){
        document.querySelector("iframe.kontakty-content").style.height = "240px";
        document.querySelector("div.kontakty-header button").onclick = kontaktyOff;
    }
    function kontaktyOff(){
        document.querySelector("iframe.kontakty-content").style.height = "0vh";
        document.querySelector("div.kontakty-header button").onclick = kontakty;
    }
    function kontakty1(){
        document.getElementById("content1").style.height = "240px";
        document.getElementById("button1").onclick = kontaktyOff1;
    }
    function kontaktyOff1(){
        document.getElementById("content1").style.height = "0vh";
        document.getElementById("button1").onclick = kontakty1;
    }
    function kontakty2(){
        document.getElementById("content2").style.height = "240px";
        document.getElementById("button2").onclick = kontaktyOff2;
    }
    function kontaktyOff2(){
        document.getElementById("content2").style.height = "0vh";
        document.getElementById("button2").onclick = kontakty2;
    }
    function kontakty3(){
        document.getElementById("content3").style.height = "240px";
        document.getElementById("button3").onclick = kontaktyOff3;
    }
    function kontaktyOff3(){
        document.getElementById("content3").style.height = "0vh";
        document.getElementById("button3").onclick = kontakty3;
    }