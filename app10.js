//10.- Introducir un número por teclado y que nos diga si es par o impar. 

var num;
process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    if(num % 2 == 0)
    {
        console.log("El numero es par.");
    }
    else
    {
        console.log("El numero es impar.");
    }
    process.exit();
});