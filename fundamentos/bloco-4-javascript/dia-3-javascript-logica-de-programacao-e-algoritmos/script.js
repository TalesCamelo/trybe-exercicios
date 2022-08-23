// exercicio 1

// let resultado = 1;

// for (let index = 10; index > 1; index -=1) {
//     resultado = resultado * index;
// }
// console.log("O resultado é:", resultado);

// exercicio 2

// let word = 'Tales Camelo';
// let reverseWord = '';

// for (index = word.length -1; index > -1; index -=1) {
//     reverseWord = reverseWord + word[index]
// }

// console.log(word, 'ao contrário é:', reverseWord);

// exercicio 3

// let array = ['java', 'javascript', 'python', 'html', 'css', 'lulu'];
// let maior = 0;
// let menor = 100;

// for (index = 0; index < array.length; index +=1) {
//     if (maior < array[index].length) {
//         maior = array[index].length
//     }
// }

// for (index1 = 0; index1 < array.length; index1 +=1) {
//     if (menor > array[index1].length) {
//         menor = array[index1].length
//     } 
// }

// console.log(array[2].length);
// console.log(maior);
// console.log(menor);

// exercicio 4

let maiorPrimo = 0;

for (index = 2; index <= 50; index +=1) {
    if (index / index === 1) {
        maiorPrimo = index
    }
}

console.log('O maior número primo é:', maiorPrimo);