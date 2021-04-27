//21.- Hacer un programa que calcule independientemente la suma de los pares y los impares de 
//     los números entre 1 y 1000

let sumaPares = 0;
let sumaImpares = 0;

for(let i = 1; i < 1001; i++)
{
    if(i % 2 == 0)
    {
        sumaPares += i;
    }
}

for(let i = 1; i < 1001; i++)
{
    if(i % 1 == 0)
    {
        sumaImpares += i;
    }
}

console.log("La suma de los numeros pares es: " + sumaPares);
console.log("La suma de los numeros impares es: " + sumaImpares);