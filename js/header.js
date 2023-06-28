// let link=document.createElement('a');
// document.getElementById("hasard").appendChild(link);
// link.textContent = 'Lieu au hasard !';
// link.href = 'http://your.domain.tld/some/path';


// Lieu au hasard
function hasard(){
    var myrandom=Math.round(Math.random()*3)
    var link1="./tresor.html"
    var link2="./index.html"
    var link3="./meteo.html"
    var link4="./rainbowland.html"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
    else if (myrandom==3)
        window.location=link4  
};


// Meteo 
let date = new Date();
let jour = date.getDate();
let mois = date.getMonth() + 1;
let annee = date.getFullYear();
let quelJour = date.getDay();

function jour0(quelJour) {
    if (quelJour == 0) {
        return "Dimanche";
    } else if (quelJour == 1) {
        return "Lundi";
      } else if (quelJour == 2) {
        return "Mardi";
      } else if (quelJour == 3) {
        return "Mercredi";
      } else if (quelJour == 4) {
        return "Jeudi";
      } else if (quelJour == 5) {
        return "Vendredi";
      } else if (quelJour == 6) {
        return "Samedi";
    }};

document.getElementById("meteo").textContent = `${jour0(quelJour)} ${jour}/${mois}/${annee} :`;