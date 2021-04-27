//6.- Hacer un programa que imprima todos los números naturales que hay desde el uno hasta un 
//    número que introducimos por teclado.

var num;
process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    for (let i = 1; i <= num; i++)
        console.log(i);
    process.exit();
});