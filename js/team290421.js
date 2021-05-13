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

/* #3.
Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
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

#4.
Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
var validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны


#5.
Напишите функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
Ниже вы можете посмотреть работу кода:
let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет сумму этих значений

// 6.

const account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
        // метод, который меняет дисконт аккаунта
    },
    showOrders() {
        // метод, который показывает все заказы аккаунта
    },
    addOrder(cost, order) {
        this.orders.push(order);
        // добавляет заказ (order) в корзину (orders)
        let newBalance = this.balance;
        for (const cost of this.orders) {
            newBalance -= cost;
        }
        return newBalance;
        // метод, который проводит списание со счета на сумму cost
    },
};

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
// account.addOrder(5000, 'order-4');
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

/////////////////////////////////////////////////

/* 7. У вас в доме была банка малинового варенья.Когда вы заболели, то решили найти эту банку, чтобы полечиться.Но банка оказалась пуста! Необходимо найти воришку.Напишите функцию, возвращает сообещние о том, кто съел варенье.Если функция получает на вход строку, то она возвращает 'Кто съел варенье? Это была Юля!' Если число, то 'Кто съел варенье? Это был Дима!', ну а если булевое значение, то 'Варенье съел наш пёс!'.Пустых строк функция принимать не будет.'
Пример кода:
cookie('Машина') => 'Кто съел варенье? Это была Юля!'
cookie(26) => 'Кто съел варенье? Это был Дима!'
cookie(1.24) => 'Кто съел варенье? Это был Дима!'
cookie(false) => 'Варенье съел наш пёс!'
cookie(true) => 'Варенье съел наш пёс!' */
















