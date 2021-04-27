//7.- Introducir tantas frases como queramos y contarlas.

var frases = [];
let cont = 0;
console.log("Introduce una frase: ");

process.stdin.on('data', function(data){
    frases.push(data.toString().trim());
    cont++;
    console.log("Llevas " + cont + " frases.\n");
});