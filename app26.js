//26.- Introducir una frase por teclado e imprimirla en el centro de la pantalla.

var word;

process.stdout.write("Introduce una palabra: ");
process.stdin.on('data', function(data){
    word = data.toString().trim();
    console.log("\t\t\t\t" + word);
    process.exit();
});