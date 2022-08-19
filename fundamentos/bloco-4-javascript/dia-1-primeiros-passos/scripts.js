const a = 4;
// const b = 8;
// const c = 6;

// console.log('adição = ' + (a + b));
// console.log('subtração = ' + a - b);
// console.log('Multiplicação = ' + a * b);
// console.log('Divisão = ' + a / b);
// console.log('Módulo = ' + a % b);

// if (a > b) {
//     console.log(a);
// } else if (b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

switch (a) {
    case a > 0 : 
        console.log('Positive');
        break;
    
    case a === 0 :
        console.log('Zero');
        break;

    case a < 0 :
        console.log('Negative');
        break;

    default:
        break;
}