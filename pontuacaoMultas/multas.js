// Desenvolver um programa no qual o usuário digite o número de
// multas que deseja cadastrar e para cada multa deve colocar o valor
// em reais e os pontos perdidos na carteira de habilitação. Ao final,
// mostrar o somatório das multas e dos pontos, caso os pontos
// passem de 21, exibir a mensagem “Você está irregular”, senão,
// exibir “Você está regular”.

let num_multas = prompt("Digite aqui as multas para cadastrar:");

var val_multas = 0;
var pts_multas = 0;

function multas() {
  for (i = 0; i < num_multas; i++) {
    let valorReais = Number(prompt("Digite o valor: "));
    let pontos = Number(prompt("Digite os pontos: "));
    somaval = somaval + valor;
    somapts = somapts + pontos;
  }

  alert(`A soma dos valores das multas é ${somaval}.`);
  alert(`A soma dos pontos é ${somapts}.`);

  if (somapts > 21) {
    alert("Está irregular");
  } else {
    alert("Está regular");
  }
}
// corrigido em aula

// let somaval = 0
// let somapts = 0

// let num_multas = prompt("Digite o número de multas a cadastrar: ")

// for(i=0; i < num_multas; i++){

//    let valor = Number (prompt("Digite o valor: "))
//    let pontos = Number(prompt("Digite os pontos: "))
//    somaval = somaval + valor
//    somapts = somapts + pontos

// }

// alert (`A soma dos valores das multas é ${somaval}.`)
// alert (`A soma dos pontos é ${somapts}.`)

// 	if (somapts > 21){

//         alert("Está irregular")

//     }else{

//         alert("Está regular")

//     }
