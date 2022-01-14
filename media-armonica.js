function dividirValores(lista)
{
  let valorAcumulado = 0;
  for ( valor of lista){

    const valorDividido = 1 / valor;
    valorAcumulado += valorDividido;
  }

  const media_armonica = lista.length/valorAcumulado;
  console.log(media_armonica);
};
