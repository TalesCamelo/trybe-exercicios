// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//     for (let index = 0; index < oddsAndEvens.length; index += 1) {
//         for (let i = 1; i < index; i += 1) {
//             if (oddsAndEvens[index] > oddsAndEvens[i]) {
//                 let auxiliar = oddsAndEvens[index];
//                 oddsAndEvens[index] = oddsAndEvens[i];
//                 oddsAndEvens[i] = auxiliar;
//             }
//         }
//     }
//     return oddsAndEvens;
// }

// console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);