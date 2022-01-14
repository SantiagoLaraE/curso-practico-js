function calcularPromedioLista(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promediolista = sumaLista / lista.length;
  return promediolista;
}
function calcularMedianaArray(lista) {
  lista.sort((a, b) => a - b);
  console.log(lista);
  let mediana;

  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
    const promedioElementos = calcularPromedioLista([elemento1, elemento2]);
    mediana = promedioElementos;
  } else {
    mediana = lista[mitadLista];
  }
  console.log(`La mediana de tu array es ${mediana}`);
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
