let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = (0);


console.log(numbers);

for (index = 0; index <= (numbers.length -1); index += 1) {
    
    soma = soma + numbers[index]
}

let media = soma / numbers.length;

console.log(soma);
console.log(media);
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

let maior = 0;
let impar = 0;
let menor = numbers[0];

for (index2 = 0; index2 <= (numbers.length -1); index2 += 1) {
    
    if (numbers[index2] > maior) {
        maior = numbers[index2]
    }
    if (numbers[index2] % 2 === 1 ) {
        impar = impar+= 1
    }  
    if (impar === 0) {
        console.log('nenhum valor ímpar encontrado');
    }
    if (numbers[index2] < menor) {
        menor = numbers[index2]
    }
}

console.log('O maior valor é: ', maior);
console.log('Total de numeros impares encontrados: ', impar);
console.log('O menor valor é: ', menor);