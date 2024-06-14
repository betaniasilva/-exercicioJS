let numberTwo = Number(prompt("Insira 1 número:"));
let numberOne = Number(prompt("Insira 1 número:"));

let soma = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let multi = numberOne * numberTwo;
let div = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`${soma} é a soma dos dois números!`);
alert(`${sub} é a subtração entre os dois números!`);
alert(`${multi} é a multiplicação entre os dois números!`);
alert(`${div} é a divisão entre os dois números!`);
alert(`${rest} é o resto entre a divisão dos dois números!`);

if (soma % 2 === 0) {
  alert(`A soma dos números é par: ${soma}!`);
} else {
  alert(`A soma dos números é ímpar:${soma}!`);
}

if (numberOne === numberTwo) {
  alert(`Os números são iguais!`);
} else {
  alert(`Os números são diferentes!`);
}
