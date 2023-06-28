let img = document.querySelectorAll(".etoile");
img.onclick = function changeimg (src){
    src = img.getAttribute("src");
    if (src=="../bootstrap/images/lego.jpg"){
    img.src="../bootstrap/images/logo.png";
    }
    else if(src=="../bootstrap/images/logo.png"){
    img.src="../bootstrap/images/lego.jpg";
    }
};