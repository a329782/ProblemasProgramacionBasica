//28.- Simular el lanzamiento de una moneda al aire e imprimir cara o cruz. 

var ran;
var moneda;

ran = Math.floor(Math.random() * 2);

if(ran == 0)
    moneda = "cara";
else
    moneda = "cruz";
console.log("La moneda se ha lanzado y a caido " + moneda);