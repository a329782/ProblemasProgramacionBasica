//17.- Imprimir, contar y sumar los múltiplos de 2 que hay entre una serie de números, tal que el 
//     segundo sea mayor o igual que el primero.

var ask = ['Numero 1: ', 'Numero 2: '];
var nums = [];
let cont = 0;
let sonPares = 0;
let sumaPares = 0;

function asking(i)
{
    process.stdout.write(ask[i]);
}

process.stdin.on('data', function(data){
    nums.push(data.toString().trim());

    if(nums.length < ask.length)
    {
        asking(nums.length);
    }
    else
    {
        if(nums[1] >= nums[0])
        {
            for(let i = nums[0]; i <= nums[1]; i++)
            {
                console.log(i);
                cont++;
                if(i % 2 == 0)
                {
                    sonPares++;
                    sumaPares += i;
                }
            }
        }
        console.log("Existen " + cont + " numeros entre " + nums[0] + " y " + nums[1]);
        console.log("Existen " + sonPares + " numeros pares entre ellos.");
        console.log("La suma de los multiplos de 2 es " + sumaPares );
        process.exit();
    }
});


asking (0);
