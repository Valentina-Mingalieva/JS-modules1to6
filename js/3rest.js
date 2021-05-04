// Вывести массив машин, на которые у меня хватит денег.

let money = 85;
let cars = [
    { name: "ferrari", cost: 200 },
    { name: "lamborgini", cost: 290 },
    { name: "lada", cost: 20 },
    { name: "niva", cost: 50 },
    { name: "bmw", cost: 90 },
];

const canBuy = function (money) {
    const carsICanBuy = [];
    for (const car of cars) {
        if (car.cost < money) {
            carsICanBuy.push(car.name);
        }
    };
    return carsICanBuy;
};

console.log(canBuy(money));

// Написать функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и тд. Ожидаемый результат, если это объект true, в противном случае false. {(a: 1)} => true, {[1, 2, 3]} => false //

// types: object, string, number, undefined, boolean, function
// null - object, this is a bug of JS

function isObject(obj) {
    if (typeof obj !== "object") return false;
    if (obj === null) return false;
    if (obj.length >= 0) return false;
    return true;
};

console.log(isObject({}));
console.log(isObject([]));
 
// Написать функцию, которая возвращает новый объект без указанных значений. Ожидаемый результат: ({a: 1, b:2}, "b") => {a: 1}
// @param {Object} object - любой объект
// @param {?} args - список значений для удаления
// @returns {Object} - новый объект без удаленных значений

const giveBack = function (obj, ...params) {
    console.log(obj);
    console.log(params);
    let totalObj = {...obj};
    for (const param of params) {
        let o = {};
        for (const prop in totalObj) {
            if (prop === param) {
                continue;
            };
            o[prop] = totalObj[prop];
        };
        totalObj = { ...o };
    };
    return totalObj;
};
giveBack({ a: 1, b: 2 }, "b");
console.log(giveBack({ a: 1, b: 2 }, "b"));