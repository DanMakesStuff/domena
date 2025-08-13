function showMore(tohle){
    tohle.classList.toggle("active");
    tohle.parentElement.parentElement.querySelector("p.more").classList.toggle("active");
}

let pozice = document.documentElement.scrollTop;
let velikostOddilu = window.innerHeight;

let oddily = document.querySelectorAll("div.content")
let realneOddily = Array.from(oddily)
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

let menu = document.querySelector("div.menu")
function otevrit(){
    menu.classList.toggle("menu-active")
}



window.onscroll = function(){uzivatelScrollnul()}

function uzivatelKlikl(tohle){
    realneOddily.forEach(element => {
        element.classList.add("loaded");
    });
    element = tohle.getAttribute("bruh")
    document.querySelector(element).scrollIntoView();
}

let nadpisWeb = document.querySelector("div#web-dev-title");
let oddilWeb = document.querySelector("div#web-dev");
let vzdalenost = getOffset(nadpisWeb).left - 10 + "px";

function uzivatelScrollnul() {
    pozice = document.documentElement.scrollTop;
    realneOddily.forEach(element => {
        if (pozice >= (getOffset(element).top) - velikostOddilu*0.5) {
            element.classList.add("loaded");
        }
    });
    if(pozice > ((getOffset(oddilWeb).top + oddilWeb.offsetHeight - (window.innerHeight * 0.8)))){
        nadpisWeb.style = null;
        nadpisWeb.classList.add("hide")
        nadpisWeb.classList.remove("fixed")
    }
    else if (pozice > getOffset(oddilWeb).top){
        nadpisWeb.classList.add("fixed");
        nadpisWeb.style.left = vzdalenost;
        nadpisWeb.classList.remove("hide")
    }
    else{
        nadpisWeb.style = null;
        nadpisWeb.classList.remove("fixed")
        nadpisWeb.classList.remove("hide")
    }
}
function otevritOdkaz(tohle) {
    window.location += tohle.parentElement.querySelector("a").getAttribute("href")
}