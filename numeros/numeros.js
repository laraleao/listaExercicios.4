// Programar para que o usuário digite 5 números e caso sejam
// pares, mostre a média deles. Se algum número digitado não for par,
// ao final não será mostrada a média e sim uma mensagem “Um dos
// números digitados era ímpar”

let soma = 0;

let impar = false;

for (i = 1; i < 5; i++) {
  let num = Number(prompt("Digite os números:"));

  if (num % 2 == 0) {
    soma = soma + num;
  } else {
    impar = true;
  }
}

if (impar == true) {
  alert("Um dos números digitados era ímpar");
} else {
  alert(`A média dos números pares é ${soma / 5}.`);
}

// Correção em aula

// let soma = 0;
// let impar = false;

// for (let i = 1; i <= 5; i++) {
//   let num = Number(prompt("Digite um número: "));

//   if (num % 2 == 0) {
//     soma = soma + num;
//   } else {
//     impar = true;
//   }
// }

// if (impar == true) {
//   alert("Um dos números digitados era ímpar");
// } else {
//   alert(`A média dos números pares é ${soma / 5}.`);
// }
