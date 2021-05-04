// Переменная language может принимать 2 значения: "ru", "en". Если она имеет значение ruб то в переменную arr запигем строку из дней недели на русском языке, а если имеет значение en - то на английском. Решите задачу через 2 if, через switch-case.

let language = "es";
console.log(language);
let arr = "";

if (language === "ru") {
    arr = "пн, вт, ср, чт, пт, сб, вс";
} else if (language === "en") {
    arr = "mn, tue, wed, thu, fr, sat, sun";
}
console.log(arr);

// или

switch (language) {
    case "ru":
        arr = "пн, вт, ср, чт, пт, сб, вс";
        break;
    case "en":
        arr = "mn, tue, wed, thu, fr, sat, sun";
        break;
    default:
        arr = "No language given";
}
console.log(arr);

// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдает сумму всех нечетных чисел в этом диапазоне

const min = 3;
const max = 11;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 1) {
        total += i;
    }
}
console.log("total =", total);

// Дано произвольное целое число. Написать программу, которая разбивает число n на цифры и выводит их на экран. Находит сумму цифр в числе n. Подсчитывает, сколько цифр в числе n. Меняет порядок цифр числа n на обратный.

const n = 768;
const nStr = n.toString();
let total = 0;
let reverse = "";
console.log(typeof nStr);

for (let i = 0; i < nStr.length; i += 1) {
    console.log(nStr[i]);
    total += Number(nStr[i]);
}
console.log('total :>> ', total);

const numberOfSymbols = nStr.length;
console.log(numberOfSymbols);

for (let i = nStr.length - 1; i >= 0; i -= 1) {
    reverse = reverse + nStr[i];
}
console.log('reverse :>> ', reverse);

// Написать код, который выводит в консоль числа от 1 до n, где n - это целое число, с такими условиями: 
// вывод fizz вместо чисел, кратных 3,
// вывод buzz вместо чисел, кратных 5,
// вывод fizzbuzz вместо чисел, кратных 3 и 5

const n = 21;

for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}

// Пользователь вводит диапазон. Нужно вывести на экран все простые числа из этого диапазона. Простыми числами называются числа, которые имеют всего 2 делителя, то есть делятся только на 1 и на самого себя! Пример простых чисел: 3, 5, 7, 11, 13, 17, 19, ...

const min = 1;
const max = 20;

for (let i = min; i <= max; i += 1) {
    for (let j = 2; j <= i/2; j+=1) {
        if (i % j === 0) {
            console.log("combined", i);
            break;
        }
        console.log("simple", i);
}
}
// не дорешано!!!!!!!!!!!!!!!

// Фибоначчи - rлассическая задача, которую можно встретить на собеседованиях самого разного уровня. Стоит напомнить, что последовательность Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих. Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.

function fibonachi(n) {
    let number1 = 0;
    let number2 = 1;
    let total = [0,1];
    for (let i = 0; i < n; i++){
        let numberN = number1 + number2;
        total.push(numberN);
        number1 = number2;
        number2 = numberN;
    }
    return total
}
console.log(fibonachi(15));