//19.- Hacer un programa que simule el funcionamiento de un reloj digital y que permita ponerlo en 
//     hora.

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    midday = (hour>= 12) ? "PM" : "AM";
    console.log(hour%12 + " : " + min + " : " + sec + " " + midday);
    var t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime();