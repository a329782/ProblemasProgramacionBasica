//32.- Crear un arreglo de 20 elementos con nombres de personas. Mostrar los elementos de la lista 
//     debiendo ir cada uno en una fila distinta. 

var ask = ['Persona 1: ', 'Persona 2: ', 'Persona 3: ',
            'Persona 4: ', 'Persona 5: ', 'Persona 6: ', 'Persona 7: ', 'Persona 8: ',
            'Persona 9: ', 'Persona 10: ', 'Persona 11: ', 'Persona 12: ', 'Persona 13: ',
            'Persona 14: ', 'Persona 15: ', 'Persona 16: ', 'Persona 17: ', 'Persona 18: ',
            'Persona 19: ', 'Persona 20: '];
var personas = [];

function asking(i)
{
    process.stdout.write(ask[i]);
}

process.stdin.on('data', function(data){
    personas.push(data.toString().trim());

    if(personas.length < ask.length)
    {
        asking(personas.length);
    }
    else
    {
        for(var i = 0; i < 21; i++)
        {
            console.log("La lista de personas es la siguiente: ");
            console.log("Persona " + i + ": " + personas[i]);
        }
        process.exit();
    }
});


asking (0);

