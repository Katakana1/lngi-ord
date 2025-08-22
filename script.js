var start = Date.now();

if(localStorage.getItem("logisv") != "null"){
  start = localStorage.getItem("logisv");
}

function v(t,m) {
  if(t >= 0 && t < 30){
    if(m == "n"){
      return (1/(30-t)*30-1).toFixed(2);
    }
    if(m == "r"){
      return Math.floor(1/(30-t)*30-1);
    }
    if(m == "m"){
      return (1/(30-t)*30-1) % 1;
    }
  } else if(t < 150){
    var a = v(t*((t-30)/120),m);
    if(m != "m"){
      if(a == 0){
        return "ω";
      } else {
        return "ω + " + a;
      }
    } else {
      return a;
    }
  } else if(100/6+t*(((t-150)/2850*44+1)/45) <= t) {
    var a = v(100/6+t*(((t-150)/2850*44+1)/45),"m");
    a = v(t*a,m);
    var b = v(100/6+t*(((t-150)/2850*44+1)/45),"r");
    if(m != "m"){
      if(a == 0){
        return "ω<sup>" + b + "</sup>";
      } else {
        return "ω<sup>" + b + "</sup> + " + a;
      }
    } else {
      return a;
    }
  } else {
    return "ε<sub>0</sub>";
  }
}

function l(){
  document.getElementById("ord").innerHTML = v((Date.now()-start)/1000,"n");
  localStorage.setItem("logisv",start);
}

setInterval(l,10);