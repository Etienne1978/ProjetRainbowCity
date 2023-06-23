// let link=document.createElement('a');
// document.getElementById("hasard").appendChild(link);
// link.textContent = 'Lieu au hasard !';
// link.href = 'http://your.domain.tld/some/path';

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
