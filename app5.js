//5.-Hacer un programa que imprima los números impares hasta el 100 y que imprima cuantos 
//   impares hay.

let a = 0; 
for (let i = 1; i < 101; i++)
    if(i % 2 == 1)
    {
        a++;
        console.log(i);
    }
console.log ("Existen " + a + " numeros impares.");