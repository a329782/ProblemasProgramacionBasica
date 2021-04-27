//23.- Hacer un programa que imprima los números del 0 al 100, controlando las filas y las 
//     columnas. 

for(let i = 0; i < 101; i++)
{
    if(i % 10 == 0)
        console.log("\n");
    process.stdout.write(i + " ");
}