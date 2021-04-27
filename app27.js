//27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.

var num;

process.stdout.write("Introduce un numero (mayor que 0 y menor que 10): ");
process.stdin.on('data', function(data){
    num = data;
    if(num > 0 && num < 11)
    {
        for(var i = 1; i < 11; i++)
        {
            console.log(num + " x " + i + " = " + num*i);
        }
    }
    else
    {
        console.log("El numero no es valido compadRe.");
    }
    process.exit();
});