//Código del cuadrado
console.group("Cuadrado");
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del triángulo

console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triángulo miden ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo}cm`);

// const alturaTriangulo = 5.5;

// console.log(`La altura del Triángulo es de ${alturaTriangulo}cm`)

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

//Código del Círculo

console.group("Círculos");

// Radio
// const radioCirculo = 4;

// console.log(`El radio del círculo es: ${radioCirculo}cm`);

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

//PI
// const PI = 3.1415;
const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`);

//Perímetro/Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Interactuar con html

//CUADRADO
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = parseInt(input.value);

  if (value == 0 || value == "") {
    alert("Debes ingresar un valor");
  } else {
    const area = areaCuadrado(value);
    alert(`El área del cuadrado es ${area}`);
  }
}

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = parseInt(input.value);

  console.log(value);

  if (value == 0 || value == "") {
    alert("Debes ingresar un valor");
  } else {
    const perimetro = perimetroCuadrado(value);
    alert(`El perímetro del cuadrado es ${perimetro}`);
  }
}

//TRIANGULO

function calcularAreaTriangulo() {
  const inputBaseTriangulo = parseInt(
    document.getElementById("inputBaseTriangulo").value
  );
  const inputAlturaTriangulo = parseInt(
    document.getElementById("inputAlturaTriangulo").value
  );

  const area = areaTriangulo(inputBaseTriangulo, inputAlturaTriangulo);
  alert(`El área del triangulo es ${area}`);
}

function calcularPerimetroTriangulo() {
  const inputLado1Triangulo = parseInt(
    document.getElementById("inputLado1Triangulo").value
  );
  const inputLado2Triangulo = parseInt(
    document.getElementById("inputLado2Triangulo").value
  );
  const inputBaseTriangulo = parseInt(
    document.getElementById("inputBaseTriangulo").value
  );

  const perimetro = perimetroTriangulo(
    inputLado1Triangulo,
    inputLado2Triangulo,
    inputBaseTriangulo
  );
  alert(`El perímetro del triangulo es ${perimetro}`);
}

// CIRCULO

function calcularAreaCirculo() {
  const inputCirculo = parseInt(document.getElementById("inputCirculo").value);

  const area = areaCirculo(inputCirculo);
  alert(`El area del triangulo es ${area}`);
}
function calcularPerimetroCirculo() {
  const inputCirculo = parseInt(document.getElementById("inputCirculo").value);

  const perimetro = perimetroCirculo(inputCirculo);
  alert(`El perímetro del triangulo es ${perimetro}`);
}

// HALLAR ALTURA TRIANGULO

function hallarAlturaTriangulo(lado1, lado2, base){
 if (lado1 != lado2){
   alert("No es un tríangulo isóceles")
 }else{
  return (Math.sqrt(Math.pow(lado1, 2)-(Math.pow(base, 2)/4)))
 }
}

function calcularAlturaTriangulo(){
  const inputLado1Triangulo = parseInt(document.getElementById("inputLado1Triangulo__altura").value);
  const inputLado2Triangulo = parseInt(document.getElementById("inputLado2Triangulo__altura").value);
  const inputBaseTriangulo = parseInt(document.getElementById("inputBaseTriangulo__altura").value);

  const resultado = hallarAlturaTriangulo(inputLado1Triangulo, inputLado2Triangulo, inputBaseTriangulo);
  alert(`La altura del triángulo es ${resultado}`)

}

