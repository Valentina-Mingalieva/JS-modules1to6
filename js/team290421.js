/* #1.
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора. 
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.

const Calculator = function() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
        }
        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3"); // 6
console.log(result); */

/* 2. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
Наш класс должен работать так:
var str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' */

/* function MyString() {

    this.reverse = function (str) {
        return str.split('').reverse().join("");
    };

    this.ucFirst = function (str) {
        return str[0].toUpperCase() + str.slice(1);
    };

    this.ucWords = function (str) {
        return str.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    };
}

const str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' */

// 3. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

/* class Validator {
    
    isEmail(email) {
        let emailForm = /\S+@\S+\.\S+/;
        return emailForm.test(email);
    }
    isDomain(domain) {
        let domainForm = /\S+.\S+/;
        return domainForm.test(domain);
    }
    isDate(myDate) {
        let reget = /^(0?\d|[12]\d|3[01])[-/.](0?\d|1[012])[-/.](19|20)?\d{2}$/g;
        return reget.test(myDate);
    } 
    isPhoneUa(number) {
        let reb = /^(\+\d{2}[-\.\(]\d{3}[-\.\)]\d{2}[-\.]\d{2}[-\.]\d{3})+$/g;
        return reb.test(number);
    }
    isPhoneDe(myNumber) {
        let rebe = /^(\+\d{3}[-\.]\d{2}[-\.]\d{3}[-\.]\d{3})+$/g;
        return rebe.test(myNumber);
    }
}

var validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru')); // true
console.log(validator.isDomain('phphtml.net')); // true
console.log(validator.isDate('12.02.2020')); // true
console.log(validator.isPhoneUa('+38(093)07-25-966')); // true
console.log(validator.isPhoneDe('+176-67-444-203')); // true */

// 4. Напишите функцию-конструктор Accumulator(startingValue). Объект, который она создаёт, должен уметь следующее:
// - Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// - Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

/* const Accumulator = function (startingValue) {
    this.value = startingValue;
  
    this.read = function () {
        let yourNumber = +prompt('Please enter any number');
        return this.value += yourNumber;
    }
};

let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет сумму этих значений */

// 5.

/* const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        // метод, который меняет дисконт аккаунта
        this.discount = value;
        return this.discount;
    },
    showOrders() {
        // метод, который показывает заказы
        return this.orders;
    },
    addOrder(cost, order) {
        // добавляет заказ (order) в корзину (orders)
        this.orders.push(order);
        // метод, который проводит списание со счета на сумму cost
        this.balance -= cost;
    },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15
console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3'] 
account.addOrder(5000, 'order-4'); 
console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']  
console.log(account.balance); // 19000 +
console.log(account.showOrders()); // ['order-1', 'order-2', 'order-3']  */

// 6. У вас в доме была банка малинового варенья.Когда вы заболели, то решили найти эту банку, чтобы полечиться.Но банка оказалась пуста! Необходимо найти воришку.Напишите функцию, возвращает сообещние о том, кто съел варенье.Если функция получает на вход строку, то она возвращает 'Кто съел варенье? Это была Юля!' Если число, то 'Кто съел варенье? Это был Дима!', ну а если булевое значение, то 'Варенье съел наш пёс!'.Пустых строк функция принимать не будет.'

/* function getThief (input) {
    let result;

    if (typeof input === "string") {
        result = `Кто съел варенье? Это была Юля!`;
    } else if (typeof input === "number") {
        result = `Кто съел варенье? Это был Дима!`;
    } else {
        result = `Варенье съел наш пёс!`;
    }
    return result;
}

console.log(getThief('Машина')); // Кто съел варенье? Это была Юля!
console.log(getThief(25)); // Кто съел варенье? Это был Дима!
console.log(getThief(1.23)); // Кто съел варенье? Это был Дима!
console.log(getThief(false)); // Варенье съел наш пёс!
console.log(getThief(true)); // Варенье съел наш пёс! */

// 7. Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке. Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число. Пример кода:

/* const sortedArray = items => items.sort();

console.log(sortedArray([6, 2, 3, 4, 5])); // [2, 3, 4, 5, 6]
console.log(sortedArray([14, 32, 3, 5, 5])); // [3, 5, 5, 14, 32]
console.log(sortedArray([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(sortedArray(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2])); // [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']  */

// 8. Сравнение объектов:

const isEqual = (item1, item2) => item1 === item2;

const data1 = {a: 1, b: {c: 1, d: 2}, f: {p: 5, q: 6}};
const data2 = {a: 1, b: {c: 1, d: 2}, f: {p: 5, q: 6}};
const data3 = {a: 1, b: {c: 2}, l: {m: 2}};
const data4 = {a: 1, b: 2, c: {d: 6, e: 8}};
const data5 = {a: 1, b: 2, c: {d: 6, e: 8}};

console.log(isEqual(data1, data2)); // Выводит true
console.log(isEqual(data1, data3)); // Выводит false
console.log(isEqual(data4, data5)); // Выводит true
















