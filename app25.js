//25.- Introducir un número menor de 5000 y pasarlo a numero romano. 

function convert(num) {
    var c=[
          ['',"I","II","III","IV","V","VI","VII","VIII","IX"],
          ['',"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
          ['',"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
          ['',"M","MM","MMM"]
          ];
    return c[3][Math.floor(num / 1000 % 10)]+c[2][Math.floor(num / 100 % 10)]+c[1][Math.floor(num / 10 % 10)]+c[0][Math.floor(num % 10)];
   }

var numero;
console.log("Introduce un numero menor que 3999: ");
process.stdin.on('data', function(data){
    numero = data;
    if(numero < 4000)
    {
        console.log(convert(numero));

    }
    else
    {
        console.log("Ese no es un numero menor a 5000!.");
    }
    process.exit();
});