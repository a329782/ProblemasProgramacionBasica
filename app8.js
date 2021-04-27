//8.- Hacer un programa que solo nos permita introducir S o N.

console.log("Introduce 'S' o 'N' ");

var char;

process.stdin.on('data', function(data){
    char = data.toString().trim();

    if(char == 'S' || char == 's')
    {
        console.log("Bien hecho!, escribiste S");
    }
    else if(char == 'N' || char == 'n')
    {
        console.log("Bien hecho!, escribiste N");
    }
    else
    {
        console.log("Vuelve a intentarlo.");
    }
    process.exit();
});