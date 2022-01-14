const lista1 = [
    100,
    200,
    300,
    500
];

const lista2 = [
    55,
    49,
    22,
    11,
    54,
    78,
    21,
    36,
    28,
    84,
    56
];

function calcularPromedioLista(lista){
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promediolista = sumaLista / lista.length;
    return promediolista;
}


