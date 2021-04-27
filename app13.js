// 13.- Imprimir y contar los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

var num;
let contTwo = 0;
let contThree = 0;

console.log("Multiplos del 2: ");
for (let i = 1; i <= 101; i++)
    {
        if(i % 2 == 0)
        {
            process.stdout.write(i + " ");
            contTwo++;
        }
    }

console.log("\n\nMultiplos del 3: ");
for (let i = 1; i <= 101; i++)
    {
        if(i % 3 == 0)
        {
            process.stdout.write(i + " ");
            contThree++;
        }
    }

console.log("\n\nExisten " + contTwo + " multiplos del 2.");
console.log("Existen " + contThree + " multiplos del 3.");