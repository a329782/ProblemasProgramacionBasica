//14.- Hacer un programa que imprima el mayor y el menor de una serie de cinco números que 
//vamos introduciendo por teclado. 

var ask = ['Numero 1: ', 'Numero 2: ', 'Numero 3: ',
            'Numero 4: ', 'Numero 5: '];
var nums = [];
let mayor = 0;
let menor = 0;
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
        for(let i = 0; i <= nums.length; i++)
        {
            if(nums[i]>mayor)
            {
                mayor = nums[i];
            }
            if(nums[i]<mayor)
            {
                menor = nums[i];
            }
        }
        
        console.log("El numero mayor de los 5 es: " + mayor);
        console.log("El numero menor de los 5 es: " + menor);
        process.exit();
    }
});


asking (0);
