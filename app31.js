//31.- Hacer un programa que nos permita introducir un número por teclado y sobre él se realicen 
//     las siguientes operaciones: comprobar si es primo, hallar su factorial o imprimir su tabla de 
//     multiplicar. 

var num;
var primo = true;

function esPrimo(num)
{
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
}

function factorial(num)
{
    let res = 1;
    if(num == 0 || num == 1)
    {
        console.log(res);
    }
    else
    {
        for(var i = num; i >= 1; i--)
            res = res * i;
        console.log(res);
    }
}

function tablaMult(num)
{
    for(let i = 1; i < 11; i++)
    {
        console.log(num + " x " + i + " = " + num*i);
    }
}

process.stdout.write("Introduce un numero: ");
process.stdin.on('data', function(data){
    num = data;
    esPrimo(num);
    process.stdout.write("El factorial del numero " + num + " es ");
    factorial(num);
    console.log("");
    tablaMult(num);
    process.exit();
});
