let bgColor;

// CREAZIONE ARRAY CON COLORI
let colors = ['rgb(0, 128, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)' ,'rgb(255, 165, 0)', 'rgb(128, 0, 128)', 'rgb(255, 192, 203)', 'rgb(0, 255, 255)', 'rgb(165, 42, 42)']; 

let c1; let c2; let c3;
let nt = 5;
let kk=0; let kkk=0;

// FUNZIONE SELEZIONE COLORE
function color(id){
const element = document.getElementById(id);
const cssObj = window.getComputedStyle(element, null);
bgColor = cssObj.getPropertyValue("background-color");

} 
function color_sel(switch_id) {
  document.getElementById(switch_id).style.backgroundColor = bgColor;
}

// FUNZIONE CLEAN
function clean() {
  for (let i=3; true; i--) {
  if (document.getElementById('tent'+(i)).style.backgroundColor != "") {
    document.getElementById('tent'+(i)).style.backgroundColor = "";
    break;
  }
}
}

function genera() {
  let b = 0;
  while (b == 0) {
  let ca = [];
  for (let i = 0; i < 3; i++) {
  let x = Math.floor((Math.random() * 9));
  ca[i] = colors[x];
  }
  c1 = ca[0];
  c2 = ca[1];
  c3 = ca[2];

  if (c1 == c2 || c1 == c3 || c2 == c3) {
    b = 0;
  } else {
    b = 1;
  } 
}
}

function go() {

  let cd=0;
  let j=0;
  let y=0;  
  
  if(document.getElementById("tent1").style.backgroundColor != document.getElementById("tent2").style.backgroundColor && document.getElementById("tent2").style.backgroundColor != document.getElementById("tent3").style.backgroundColor && document.getElementById("tent1").style.backgroundColor != document.getElementById("tent3").style.backgroundColor) {cd=1;} // CONTROLLO COLORI DIVERSI

  if(cd==1) {

  for(let i=1; i!=4; i++) {
    if(document.getElementById('tent'+(i)).style.backgroundColor == "") {
      j=1;
   }
  }
  if (j==1) {
    document.getElementById("Errori").innerHTML = "Inserisci tutte le caselle";
  }
  else {
    document.getElementById("Errori").innerHTML = ""; 


    for(let i=(1+kk), lp=1; i!=(kk+4); i++, lp++) {
    document.getElementById("vis"+(i)).style.backgroundColor = document.getElementById("tent"+(lp)).style.backgroundColor; }


    nt = nt-1;
    kk = kk+3; 


    for(let i=(1+kkk); i!=(kkk+4); i++) {
    if(document.getElementById("tent1").style.backgroundColor == c1) {
      document.getElementById("ris"+i).style.backgroundColor = "black";
    }

    else if (document.getElementById("tent1").style.backgroundColor == c2 || document.getElementById("tent1").style.backgroundColor == c3) {
      document.getElementById("ris"+i).style.backgroundColor = "gray";
    }

  i++;
   
  if(document.getElementById("tent2").style.backgroundColor == c2) {
      document.getElementById("ris"+i).style.backgroundColor = "black";
    }
    else if (document.getElementById("tent2").style.backgroundColor == c1 || document.getElementById("tent2").style.backgroundColor == c3) {
      document.getElementById("ris"+i).style.backgroundColor = "gray";
    }

    i++;

    if(document.getElementById("tent3").style.backgroundColor == c3) {
      document.getElementById("ris"+i).style.backgroundColor = "black";
    }
    else if (document.getElementById("tent3").style.backgroundColor == c2 || document.getElementById("tent3").style.backgroundColor == c1) {
      document.getElementById("ris"+i).style.backgroundColor = "gray";
    }
  }

  kkk = kkk+3;
  
  document.getElementById("numtent").innerHTML = "Numero Tentativi: "+nt;

  if(document.getElementById("tent1").style.backgroundColor == c1 && document.getElementById("tent2").style.backgroundColor == c2 && document.getElementById("tent3").style.backgroundColor == c3) {
    document.getElementById("numtent").innerHTML = "Hai Vinto!";
    location.href="win.html";

  }

  else if(nt == 0) {
    document.getElementById("numtent").innerHTML = "Game Over";
    location.href="lose.html";
  }

  
  for(let i=1; i!=4; i++) {
  document.getElementById("tent"+i).style.backgroundColor = "";
  } // PULIZIA DEL TENTATIVO AUTOMATICA
}

}

else {
  document.getElementById("Errori").innerHTML = "INSERISCI COLORI DIVERSI";
}

}

function playag() {
  location.href="game.html";
}



function reg() {
  var modal = document.getElementById("reg");
  modal.style.display = "block";
}


function reg_close() {
  var modal = document.getElementById("reg");
  modal.style.display = "none";
}

function menu() {
  location.href="index.html";
}





