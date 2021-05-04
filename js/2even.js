// Посчитать сумму всех чётных чисел в массиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// создать переменную тотал
let total = 0;

// перебрать массив
/* for (let i = 0; i < numbers.length; i += 1) {
    // проверить каждый элемент на чётность
    const number = numbers[i];
    if (number % 2 === 0) {
        console.log("EVEN");
        // если чётный, приплюсовать к тотал
        total += number;
    }
}
console.log("Total: ", total); */

// oder
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log("EVEN");
        total += number;
    }
}
console.log("Total: ", total);