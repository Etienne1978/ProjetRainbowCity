// let link=document.createElement('a');
// document.getElementById("hasard").appendChild(link);
// link.textContent = 'Lieu au hasard !';
// link.href = 'http://your.domain.tld/some/path';


// Lieu au hasard
function hasard(){
    var myrandom=Math.round(Math.random()*27)
    var link1="./tresor.html"
    var link2="./Bar.html"
    var link3="./bibliothèque.html"
    var link4="./rainbowland.html"
    var link5="./bowling.html"
    var link6="./casernepompiers.html"
    var link7="./cinema.html"
    var link8="./école.html"
    var link9="./fleuriste.html"
    var link10="./forêt.html"
    var link11="./gare.html"
    var link12="./hopital.html"
    var link13="./jardinbotanique.html"
    var link14="./legoclose.html"
    var link15="./mairie.html"
    var link16="./maison de retraite.html"
    var link17="./musée.html"
    var link18="./Opéra.html"
    var link19="./parc.html"
    var link20="./plage.html"
    var link21="./quartier.html"
    var link22="./resident.html"
    var link23="./nurserie.html"
    var link24="./restaurant.html"
    var link25="./riviere.html"
    var link26="./supermarché.html"
    var link27="./Théâtre.html"
    var link28="./usine.html"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
    else if (myrandom==3)
        window.location=link4 
    else if (myrandom==4)
        window.location=link5 
        else if (myrandom==5)
        window.location=link6 
        else if (myrandom==6)
        window.location=link7 
        else if (myrandom==7)
        window.location=link8 
        else if (myrandom==8)
        window.location=link9 
        else if (myrandom==9)
        window.location=link10 
        else if (myrandom==10)
        window.location=link11 
        else if (myrandom==11)
        window.location=link12 
        else if (myrandom==12)
        window.location=link13 
        else if (myrandom==13)
        window.location=link14
        else if (myrandom==14)
        window.location=link15 
        else if (myrandom==15)
        window.location=link16 
        else if (myrandom==16)
        window.location=link17 
        else if (myrandom==17)
        window.location=link18 
        else if (myrandom==18)
        window.location=link19 
        else if (myrandom==19)
        window.location=link20 
        else if (myrandom==20)
        window.location=link21
        else if (myrandom==21)
        window.location=link22
        else if (myrandom==22)
        window.location=link23
        else if (myrandom==23)
        window.location=link24
        else if (myrandom==24)
        window.location=link25
        else if (myrandom==25)
        window.location=link26
        else if (myrandom==26)
        window.location=link27
        else if (myrandom==27)
        window.location=link28
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