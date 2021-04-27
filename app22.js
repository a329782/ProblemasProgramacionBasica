//22.- Introducir una frase por teclado. Imprimirla cinco veces en filas consecutivas, pero cada 
//     impresión ir desplazada cuatro columnas hacia la derecha. 

var word;
process.stdout.write("Introduce una palabra: ");
process.stdin.on('data', function(data){
    word = data.toString().trim();

    console.log(word);
    console.log("\t\t\t\t" + word);
    console.log("\t\t\t\t\t\t\t\t\t" + word);
    console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t" + word);
    console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + word);

    process.exit();
});