//30.- Introducir dos números por teclado y mediante un menú, calcule su suma, su resta, su 
//     multiplicación o su división. 

var ask = ['Numero 1: ', 'Numero 2: '];
var nums = [];

function asking(i)
{
    process.stdout.write(ask[i]);
}

function suma(num1, num2)
{
    var sum = num1 + num2;
    return sum;
}

function resta(num1, num2)
{
    var res = num1 - num2;
    return res;
}

function multiplicacion(num1, num2)
{
    var mul = num1 * num2;
    return mul;
}

function division(num1, num2)
{
    var div = num1/num2;
    if(num2 == 0)
        console.log("No se puede ralizar la division");
    else
        return div;
}

function menu()
{
    var integer1 = parseInt(nums[0], 10);
    var integer2 = parseInt(nums[1], 10);
    console.log("1. La suma de los numeros anteriormente ingresados es: " + suma(integer1, integer2));
    console.log("2. La resta de los numeros anteriormente ingresados es: " + resta(integer1, integer2));
    console.log("3. La multiplicacion de los numeros anteriormente ingresados es: " + multiplicacion(integer1, integer2));
    console.log("4. La divison de los numeros anteriormente ingresados es: " + division(integer1, integer2));
}

process.stdin.on('data', function(data){
    nums.push(data.toString().trim());

    if(nums.length < ask.length)
    {
        asking(nums.length);
    }
    else
    {  
        menu();
        process.exit();
    }
});

asking (0);
