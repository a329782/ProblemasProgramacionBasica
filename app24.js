//24.- Comprobar si un número mayor o igual que la unidad es primo.

var num;
var primo = true;
process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    for(let i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            primo = false;
        }
    }

    if(primo == true)
    {
        console.log("El numero " + num + " es primo");
    }
    else
    {
        console.log("El numero " + num + " no es primo");
    }
    process.exit();
});
