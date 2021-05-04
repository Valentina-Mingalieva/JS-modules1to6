// Сосчитать сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [11, 12, 13];
let total = 0;

const numbers = array1.concat(array2);

for (const number of numbers) {
    total += number;
}

console.log(total);