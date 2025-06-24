function imc(alt, peso) {
  return calculaImc = peso / (alt * alt);
}
let resultImc = imc(1.71, 70);
console.log(resultImc.toFixed(2));

//-----------------------------------------------------------------

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}
// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

// ---------------------------------------------------------------

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}
// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// --------------------------------------------------------------

function areaXPerimetroRetangulo(base, altura) {
  let area = (base * altura).toFixed(2);
  let perimetro = (2 * (base + altura)).toFixed(2);
  return {
    area,
    perimetro
  };
}
let result = areaXPerimetroRetangulo(40, 10);
console.log(`A área do retângulo é de ${result.area} e o perímetro é de ${result.perimetro}.`);

// -------------------------------------------------------------------

function calculaCirculo(raio) {
  let area = (Math.PI * (raio * raio)).toFixed(2);
  let perimetro = (2 * Math.PI * raio).toFixed(2);

  return {
    area,
    perimetro
  };
}
let resultCircle = calculaCirculo(4);
console.log(`A área de uma sala circular é de ${resultCircle.area} e o perímetro é de ${resultCircle.perimetro}.`);

// ------------------------------------------------------------------

function tabuada(num) {
  for(let i = 1; i <= 10; i++) {
    let resultadoTabuada = num * i;
    console.log(`${num} x ${i} = ${resultadoTabuada}`)
  }
}
let num = 7;
tabuada(num);
