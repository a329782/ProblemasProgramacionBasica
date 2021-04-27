//11.- Imprimir y contar los múltiplos de 3 desde 
//el uno hasta un número que introducimos por teclado.

var num;
let cont = 0;
process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    for (let i = 1; i <= num; i++)
    {
        if(i % 3 == 0)
        {
            console.log(i);
            cont++;
        }
    }
    console.log("Existen " + cont + " multiplos del 3.");
    process.exit();
});
