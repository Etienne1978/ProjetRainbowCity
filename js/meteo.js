let jourSemaine = date.getDay();

function jour0(jourSemaine) {
  if (jourSemaine == 0) {
    return "Dimanche";
} else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
}};
function jour1(jourSemaine) {
  if (jourSemaine < 6) {
    jourSemaine = jourSemaine + 1;
  } else {
    jourSemaine = 0;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function jour2(jourSemaine) {
  if (jourSemaine < 5) {
    jourSemaine = jourSemaine + 2;
  } else if (jourSemaine >= 5) {
    jourSemaine = jourSemaine - 5;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function jour3(jourSemaine) {
  if (jourSemaine < 4) {
    jourSemaine = jourSemaine + 3;
  } else if (jourSemaine >= 4) {
    jourSemaine = jourSemaine - 4;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function jour4(jourSemaine) {
  if (jourSemaine < 3) {
    jourSemaine = jourSemaine + 4;
  } else if (jourSemaine >= 3) {
    jourSemaine = jourSemaine - 3;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function jour5(jourSemaine) {
  if (jourSemaine < 2) {
    jourSemaine = jourSemaine + 5;
  } else if (jourSemaine >= 2) {
    jourSemaine = jourSemaine - 2;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function jour6(jourSemaine) {
  if (jourSemaine < 1) {
    jourSemaine = jourSemaine + 6;
  } else if (jourSemaine >= 1) {
    jourSemaine = jourSemaine - 1;
  }
  if (jourSemaine == 0) {
    return "Dimanche";
  } else if (jourSemaine == 1) {
    return "Lundi";
  } else if (jourSemaine == 2) {
    return "Mardi";
  } else if (jourSemaine == 3) {
    return "Mercredi";
  } else if (jourSemaine == 4) {
    return "Jeudi";
  } else if (jourSemaine == 5) {
    return "Vendredi";
  } else if (jourSemaine == 6) {
    return "Samedi";
  }
};

function date1(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <31){
            jour = jour+1;
        }
        else {
            jour = 1;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <30){
            jour = jour+1;
        }
        else {
            jour = 1;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <28){
            jour = jour+1;
        }
        else {
            jour = 1;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

function date2(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <30){
            jour = jour+2;
        }
        else{
            jour = jour - 29;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <29){
            jour = jour+2;
        }
        else{
            jour = jour-28;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <27){
            jour = jour+2;
        }
        else {
            jour = jour-26;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

function date3(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <29){
            jour = jour+3;
        }
        else{
            jour = jour - 28;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <28){
            jour = jour+3;
        }
        else{
            jour = jour-27;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <26){
            jour = jour+3;
        }
        else {
            jour = jour-25;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

function date4(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <28){
            jour = jour+4;
        }
        else{
            jour = jour - 27;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <27){
            jour = jour+4;
        }
        else{
            jour = jour-26;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <25){
            jour = jour+4;
        }
        else {
            jour = jour-24;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

function date5(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <27){
            jour = jour+5;
        }
        else{
            jour = jour - 26;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <26){
            jour = jour+5;
        }
        else{
            jour = jour-25;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <24){
            jour = jour+5;
        }
        else {
            jour = jour-23;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

function date6(jour, mois) {
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 ||mois == 8 ||mois == 10 ||mois == 12) {
        if (jour <26){
            jour = jour+6;
        }
        else{
            jour = jour - 25;
            if (mois ==12){
                mois = 1;
            }
            else {
                mois = mois+1;
            }
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11){
        if (jour <25){
            jour = jour+6;
        }
        else{
            jour = jour-24;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
    else if (mois == 2){
        if (jour <23){
            jour = jour+6;
        }
        else {
            jour = jour-22;
            mois = mois+1;
        }
        return `${jour}/${mois}`;
    }
};

console.log(`Nous sommes ${jour0(jourSemaine)}, il fait beau :D`);
document.getElementById("jour0").textContent = `${jour0(jourSemaine)} ${jour}/${mois}`;
document.getElementById("jour1").textContent = `${jour1(jourSemaine)} ${date1(jour, mois)}`;
document.getElementById("jour2").textContent = `${jour2(jourSemaine)} ${date2(jour, mois)}`;
document.getElementById("jour3").textContent = `${jour3(jourSemaine)} ${date3(jour, mois)}`;
document.getElementById("jour4").textContent = `${jour4(jourSemaine)} ${date4(jour, mois)}`;
document.getElementById("jour5").textContent = `${jour5(jourSemaine)} ${date5(jour, mois)}`;
document.getElementById("jour6").textContent = `${jour6(jourSemaine)} ${date6(jour, mois)}`;
