//15.- Introducir dos números por teclado. Imprimir los números naturales que hay entre ambos 
//números empezando por el más pequeño, contar cuántos hay y cuántos de ellos son pares.
//Calcular la suma de los impares.

var ask = ['Numero 1: ', 'Numero 2: '];
var nums = [];
let cont = 0;
let sonPares = 0;
let sumaImpar = 0;

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
        if(nums[0] < nums[1])
        {
            for(let i = nums[0]; i <= nums[1]; i++)
            {
                console.log(i);
                cont++;
                if(i % 2 == 0)
                {
                    sonPares++;
                }
                else if(i % 1 == 0)
                {
                    sumaImpar += i;
                }
            }
        }
        else if(nums[0] > nums[1])
        {
            for(let i = nums[1]; i <= nums[0]; i++)
            {
                console.log(i);
                cont++;
                if(i % 2 == 0)
                {
                    sonPares++;
                }
                else if(i % 1 == 0)
                {
                    sumaImpar += i;
                }
            }
        }
        console.log("Existen " + cont + " numeros entre " + nums[0] + " y " + nums[1]);
        console.log("Existen " + sonPares + " numeros pares entre ellos.");
        console.log("La suma de los numeros impares entre " + nums[0] + " y " + nums[1] + " es " + sumaImpar);
        process.exit();
    }
});


asking (0);

