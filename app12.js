//12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la suma de todos los 
//números pares por un lado, y por otro, la de todos los impares.

let sumaPar = 0;
let sumaImpar = 0;
for(let i = 1; i < 101; i++)
{
    console.log(i);
    if(i % 2 == 0)
    {
        sumaPar += i;
    }
    else if(i % 1 == 0)
    {
        sumaImpar += i;
    }
}

console.log("La suma de los numeros pares es: " + sumaPar);
console.log("La suma de los numeros impares es: " + sumaImpar);