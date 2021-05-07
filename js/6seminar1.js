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

// 6. Собрать в allTopics массив всех предметов всех курсов используя flatMap. Используя filter выполнить фильтрацию, оставив в uniqueTopics только уникальные элементы.

const courses = [
  { name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub']},
  { name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS']},
  { name: 'Basic JavaScript',
    topics: ['VSCode','Type system','Loops','Functions','Conditions','Classes','DOM','Git','GitHub']},
  { name: 'Intermediate JavaScript',
    topics: ['VSCode','NPM','Bundlers','Transpiling','Promises','AJAX','Git','GitHub']},
];

const allTopics = courses.flatMap(course => course.topics);
console.log(allTopics); // (28) ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub", "VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS", "VSCode", "Type system", "Loops", "Functions", "Conditions", "Classes", "DOM", "Git", "GitHub", "VSCode", "NPM", "Bundlers", "Transpiling", "Promises", "AJAX", "Git", "GitHub"]

const uniqueTopics = allTopics.filter(
    (topic, index, array) => array.indexOf(topic) === index);
console.log(uniqueTopics); // (18) ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub", "Terminal", "Git", "Type system", "Loops", "Functions", "Conditions", "Classes", "DOM", "NPM", "Bundlers", "Transpiling", "Promises", "AJAX"]

// 7. Написать функцию, которая определит массив, содеражщий только цифры

const array1 = [2, 4, '1'];
const array2 = [2, 4, 1];
const array3 = [2, 4, "oups"]

const isNumber = array => {
  return array.some(value => typeof value !== 'number');
  // return array.some(value => !Number.isNaN(value));
};

console.log(isNumber(array1)); // true
console.log(isNumber(array2)); // false
console.log(isNumber(array3)); // true