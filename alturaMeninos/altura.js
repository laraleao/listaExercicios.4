// Joãozinho mede 1,75m de altura e cresce 1 cm por ano,
// enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3 cm
// por ano. Faça um programa que calcule e mostre em quantos anos
// Pedrinho será mais alto que Joãozinho.

var alturaJ = 175;
var alturaP = 160;
var anos = 0;

while (alturaJ > alturaP) {
  alturaJ = alturaJ + 1;
  alturaP = alturaP + 3;
  anos = anos + 1;
}
alert(`Pedrinho será mais alto que Joãozinho em ${anos}.`);

// corrigido em aula

// let alturaj = 175
// let alturap = 160
// let anos = 0

// while (alturaj > alturap){

//     alturaj = alturaj + 1
//     alturap = alturap + 3
//     anos = anos + 1

// }

// alert (`Pedrinho levou ${anos} anos para ser mais alto que Joãozinho.`)
