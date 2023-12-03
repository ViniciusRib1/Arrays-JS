//Criando a função mesclar as arrays
function mesclarArray() {

// Definindo a primeira array e colocando os valores inteiros
const primeiraArray = [                          
          2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
          22, 24, 26, 28, 30, 32, 34, 36, 38,
          22, 22, 24, 26
]

// Definindo a segunda array e colocando os valores inteiros
const segundaArray = [
          12,22, 33, 44, 52, 61, 75, 34, 45, 64,
          21, 44, 45, 54, 34, 44, 32, 22, 32, 44, 
          23, 21, 22, 23, 12, 22, 32, 11, 33, 21
]
console.log("");
console.log("");
console.log("");
console.log("------------------------- Criado por: Vinicius Ribeiro -------------------------");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Primeira Array:");
console.log("");
console.log(primeiraArray);
console.log("");
console.log("Segunda Array:");
console.log("");
console.log(segundaArray);
console.log("");
console.log("");
console.log("");
// Criando a variável mesclar e colocando no console
console.log("------------------------- Mesclando as arrays -------------------------")
let mesclar = primeiraArray.concat(segundaArray); // O cancat mescla a primeira Array
console.log(mesclar); //Colocando no console a variável

// Fazendo o inverso das Arrays 
console.log("------------------------- Invertendo as Arrays -------------------------");
invertendo = primeiraArray.reverse(); // Aqui o invertendo pega a primeira array e faz o reverse dela com o reverse()
console.log(invertendo); // Colocando no console a variável

// Deletando números duplicados
console.log("------------------------- Deletando os números duplicados --------------");

let Deletando = segundaArray.filter(function(este, i) {  // O let deletando faz com que ele filtra as arrays e faz com que delete os números repetidos
         return segundaArray.indexOf(este) === i; // Aqui ele retorna a array e faz com que delete os números repetidos
}) ;
console.log(Deletando); //Colocando no console a variável

console.log("------------------------- Fazendo a ordem crescente ---------------------");
// Fazendo a ordem crescente
crescente = primeiraArray.sort(function(a, b) {
          return a - b;
}); // A variável crescente faz a ordem crescente da primeiraArray
console.log(crescente); //Colocando no console a variável


}

console.log(mesclarArray()); // Coloca no console a função

