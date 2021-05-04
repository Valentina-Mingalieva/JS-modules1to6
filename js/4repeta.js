/* const fnA = function (message, callback) { // high range function
    console.log(message);
    console.log(callback);
    callback();
};

const fnB = function (number) { // callback
    console.log("This is the log for fnB", number);
};

fnA("Hello", fnB); */

///////////////

/* const doMath = function (a, b, callback) {
    const result = callback(a, b);
    console.log(result);
};

const add = function (x, y) {
    return x + y;
};

doMath(2, 3, add); */

///////////////// Фильтрация массива

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию, то функция вернет true
// 4. если элемент массива не удовлетворяет условию, то функция вернет false

/* const filter = function (array, test) {
    const filteredArray = [];

    for (const element of array) {
        console.log(element);
        const passed = test(element);

        if (passed) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
};

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

// Другой вариант записи:

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
    return value <= 4;
});
console.log(r2);

const fruits = [
    { name: "apples", quantity: 200, isFresh: true },
    { name: "grapes", quantity: 150, isFresh: false },
    { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithquantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithquantity);
console.log(r3); 

// third callback shorter: 

const getFruitsWithquantity = fruit => fruit.quantity >= 120;
const r3 = filter(fruits, getFruitsWithquantity);
console.log(r3);

// more shorter: 

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);*/

////////////////////////

// Синтаксис стрелочных функций

/* const add = function (a, b, c) {
    return a + b + c;
};

console.log(add(5, 10, 15));

// ---->>>

const addArrow = (a, b, c) => a + b + c; // неявный возврат

// (a, b, c) если несколько параметров
// a если один параметр
// () если нет параметров

console.log(addArrow(50, 10, 15)); */

//////////////////

/* const counter = {
    value: 0,
    increment(value) {
        console.log("increment -> this", this);
        this.value += value;
    },
    decrement(value) {
        console.log("decrement -> this", this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment); // undefined
updateCounter(5, counter.decrement); // undefined

updateCounter(10, counter.increment.bind(counter)); 
updateCounter(5, counter.decrement.bind(counter));  */

// При передаче метода объекта как callback контекст не сохраняется!

/* // Функция - это объект и у неё есть свои функции.

const showThis = function (...args) {
    console.log(args);
    console.log("showThis -> this", this);
};

showThis(); // undefined

const objA = {
    a: 1,
    b: 2,
};

showThis.call(objA, 5, 7, 9);

// метод CALL берет функцию, на которой он был вызван, и принудительно в этой же строке вызывает в контексте этого объекта

showThis.apply(objA, [5, 7, 9]);

// APPLY передаю аргументы массивом */

// EXAMPLE

/* const changeColor = function (color) {
    console.log("changeColor -> this", this);
    this.color = color;
};

const hat = {
    color: "black",
};

changeColor.call(hat, "red");
console.log(hat);

const sweater = {
    color: "green",
};

changeColor.call(sweater, "blue");
console.log(sweater);

// BIND позволяет сделать копию функции с привязанным контекстом - всегда будет ссылаться на эту hat/ детает копию функции

сonst changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

сhangeColor();
сhangeHatColor("yellow");
console.log(hat);
сhangeSweaterColor("white");
console.log(sweater); */