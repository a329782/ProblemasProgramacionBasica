//9.- Introducir un número por teclado y que nos diga si es positivo o negativo. 

var num;
process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    if(num < 0)
    {
        console.log("El numero eso negativo.");
    }
    else if(num > 0)
    {
        console.log("El numero es positivo.");
    }
    else
    {
        console.log("El numero no es negativo ni positivo.");
    }
    process.exit();
});