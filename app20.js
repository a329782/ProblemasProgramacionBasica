//20.Calcular el factorial de un número, mediante funciones.

function factorial(num){
    let res = 1;
    if(num == 0 || num == 1)
    {
        return res;
    }
    else
    {
        for(var i = num; i >= 1; i--)
            res = res * i;
        return res;
    }
}

let num = 5;
res = factorial(num);
console.log("El factorial de " + num + " is " + res);