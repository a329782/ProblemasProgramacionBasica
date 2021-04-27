//18.- Hacer un programa que cuente las veces que aparece una determinada letra en una frase 
//     que introduciremos por teclado. 

var count;
let word;

console.log("Escriba una frase: ");

process.stdin.on('data', function(data){
    word = data.toString().trim();
    count = (word.match(/a/g) || []).length;
    console.log("Existen " + count + " letras {a} en la frase " + "{" + word + "}");
    process.exit();
});