// 1. Выведи четные числа в консоль

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.filter(number => number % 2 === 0)); // [2, 4, 6, 8, 10]
console.log(...numbers.filter(number => number % 2 === 0)); // 2, 4, 6, 8, 10

for (const number of numbers) {
    if (number % 2 === 0) console.log(number); // 2, 4, 6, 8, 10
}

numbers.forEach(item => {
    if(item % 2 === 0) console.log(item); // 2, 4, 6, 8, 10
})

// Выведи первое четное число

for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number); // 2
        break;
    }
}

// 2. Напиши функцию filterRange = (arr, min, max), которая принимает массив arr, ищет в нем элементы min и max и отдает массив этих элементов. Исходный массив не должен меняться.

const filterRange = (arr, min, max) => {
    const result = [];
    arr.forEach(num => {
        if (num >= min && num <= max) {
            result.push(num);
        }
    })
    return result;
}

console.log(filterRange(numbers, 3, 7)); // [3, 4, 5, 6, 7]

// ODER

const filterArr = (arr, min, max) => arr.filter(n => n >= min && n <= max);
console.log(filterArr(numbers, 3, 7)); // [3, 4, 5, 6, 7]

// ODER

const isInRange = (min, max) => {
    return n => n >= min && n <= max;
};

const filteredArr = (arr, min, max) => arr.filter(isInRange(min, max));
console.log("filtered", filteredArr(numbers, 3, 7)); // filtered (5) [3, 4, 5, 6, 7]

// 3. Напиши функцию getAverage(numbers), которая принимает массив чисел и возвращает среднее число

const getAverage = (numbers) => {
    let acc = 0;
    for (const number of numbers) {
        acc += number;
    }
    return acc / numbers.length;
}

console.log(getAverage(numbers)); // 5.5

// ODER 

const getAverageNumber = numbers => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
}

console.log(getAverageNumber(numbers)); // 5.5

// 4. Напиши функцию unique(arr), которая возвращает массив, содержащий тоьлько уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 8, 5, 4]; 

const unique = (arr) =>
    arr.reduce((acc, el) => {
        if (!acc.includes(el)) {
            acc.push(el);
        }
        return acc;
    }, []);

console.log(unique(notUniqueNumbers)); // [1, 2, 3, 4, 8, 5]

// ODER

const uniques = arr =>
    arr.filter((num, index, array) => array.indexOf(num) === index);

console.log(uniques(notUniqueNumbers)); // [1, 2, 3, 4, 8, 5]

// 5. Напиши функцию shuffle, которая принимает массив и возвращает новый с теми же элементами, но в случайном порядке

const shuffle = arr => {
    const resultArr = arr.slice(); // slice copies the array // oder [...arr]
    return resultArr.sort((a, b) => Math.random() - 0.5);
}

console.log(shuffle(numbers)); // [1, 5, 3, 4, 10, 9, 2, 7, 6, 8]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 6. allTopics flatMap filter uniqueTopics