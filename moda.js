function listarModa(lista){
  // Se crea un objeto para poder dar la propiedad de las veces que se repite el número
  const listaCount = {};

  // Con el método .map se recorre cada elemento y se crea un condicional
  // Cada vez que el elemento ya pasó que o que ya se creó en el objeto
  // Se suma 1 por cada vez que pase nuevamente
  // Cuando es la primera vez que pasa se suma 1

  lista.map(
    function(elemento){
      if(listaCount[elemento]){
        listaCount[elemento] += 1;
      }else{
        listaCount[elemento] = 1;
      }
    }
  )
  
  // Ahora con Object.entries se convierte el objeto nuevamente en array
  // con el fin de ordenar el array de menor a mayor y extraer el último número

  const listaArray = Object.entries(listaCount).sort(
    function(valorAcumulado, nuevoValor){
      return valorAcumulado[1] - nuevoValor[1];
    }
  );

  
  
  const moda = listaArray[listaArray.length - 1];

  console.log(`Del array el numero ${moda[0]} se repitió ${moda[1]}`);
}