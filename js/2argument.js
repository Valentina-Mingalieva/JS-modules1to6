// Псевдомассив arguments - написать функцию calculateAverage(), которая принимает прозвольное кол - во аргументов и возвращает из среднее значение. Все аргументы - числа.

/* function calculateAverage(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total / numbers.length
}

console.log(calculateAverage([1, 2, 3, 4, 5])); */

// 

const add = function (...args) {
    console.log(args);

    let total = 0;

    for (const arg of args) {
        total += arg;
    }

    return total;
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));