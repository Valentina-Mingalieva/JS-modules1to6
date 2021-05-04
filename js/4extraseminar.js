// Напиши функцию makeCounter()Б которая возвращает объект счетчик, у которого есть методы increment() - увеличить на 1, decrement() - уменьшить на 1, reset() - сбросить на 0, show() - вывести текущее значение в консоль.

const makeCounter = count => { // statt count -> ()
    // let count = 0; 
    return {
        increment() {
            count += 1;
        },
        decrement() {
            count-= 1;
        },
        reset() {
            count = 0;
        },
        show() {
            console.log(count);;
        },
    }
};

const counter = makeCounter(7);
counter.increment();
counter.show();
counter.decrement();
counter.reset(); 

// Композиция - создание сложной функциональности за счёт объединения более простых функций. В некотором смысле, композиция - это вложение функций, каждая из которых передает свой результат в качестве входных данных для другой функции.

// Напиши функцию compose, которая принимает несколько функций и возвращает функцию. принимающую число и применяющую к нему эти функции поочередно http://learn.javascript.ru/array-iteration

/* const add3 = n => n + 3;
const mult5 = n => n * 5;
const pow2 = n => n ** 2; */

/* const f1 = add3(1);
const f2 = mult5(f1);
const f3 = pow2(f2);
console.log(f3); */

/* console.log(pow2(mult5(add3(1)))); */

const compose = function (...fns) {
    return n => {
        for (const fnc of fns) {
            n = fnc(n);
        }
        return n;
    }
}

const composed = compose(add3, mult5, pow2);
console.log(composed(1));

// Есть функция changeSalary и пользователи. Напиши функцию, которая принимает пользовател и число и меняет ему зарплату на число с помощью функции changeSalary.

const changeSalary = function (value) {
    this.salary += value;
};

const user1 = {
    name: "Denis",
    salary: 3000,
}

const user2 = {
    name: "Dima",
    salary: 2800,
}

const changeUserSalary = function (user, value) {
    changeSalary.call(user, value);
}

changeUserSalary(user1, 100);
console.log(user1);

// Напиши функцию сложения вида add(num1)(num2)

const add = function (n) {
    let result = 0;
    const addToResult = function (num) {
        if (num === undefined) return result;
        result += num;
        return addToResult;
    }
    return addToResult(n);
}

console.log(add()); // 0
console.log(add(2)(5)(7)(8)()); // 14

// Напиши функцию, которая принимает степень и возвращает фенкцию, которая принимает число и возводит его в переданную ранее степень.

const makePower = (powNum) => {
    return (currentNum) => Math.pow(currentNum, powNum);
}

const powTwo = makePower(2);
console.log(powTwo(10));

const powThree = makePower(3);
console.log(powThree(3));