// this не существует в стрелочной функции

/* const obj = {
    func: function () {
        console.log("main func " + this.number);
        (() => console.log("arrow func " + this.number))();
    },
    funcArrow: () => console.log("arrow func " + this.number),
    number: 3,
}

obj.func(); */

// создать фабрику объектов, которая вернет объект с поляеми firstname, lastname и функцией getInitials(), которая вернет первую букву имя + первую букву фамилии. Вывести результат ыункции getInitials() в консоль.

// Фабрика объектов - функция, которая создаёт объекты определенного типа, то есть она нужна, чтобы консолировать однотипные объекты.

/* const getPerson = function (firstname, lastname) {
    return {
        firstname,
        lastname,
        getInitials() {
            return firstname[0] + lastname[0];
        }
    }
}

const person1 = getPerson("Valentina", "Mingalieva");
const person2 = getPerson("Kaiser", "Richter");

console.log(person1.getInitials());
console.log(person2.getInitials()); */

//////////////////////////////////////////////////////////////

// Создать объект person1 с полем name и getName, которая вернет поле name;
// Создать объект person2 с полем name и присвоить person2.getName = person1.getName getName

/* const person1 = {
    name: "IVAN",
    getName() {
        return this.name;
    },
};

const person2 = {
    name: "DIMA",
};

person2.getName = person1.getName;

console.log(person2.getName()); // DIMA
console.log(person2.getName.call(person1)); // IVAN */

///////////////////////////////////////////////////////////

/* const myself = {
    myName: "Valentina",
    myNickNames: ["Valuschka", "Valechka"],
    printMyNickNames: function () {
        this.myNickNames.forEach(
            function (nickName) {
                console.log(this.myName + " is also known as " + nickName);
            }.bind(this),
        );
    },
};

myself.printMyNickNames(); */

// ODER 

/* const myself = {
    myName: "Valentina",
    myNickNames: ["Valuschka", "Valechka"],
    printMyNickNames: function () {
        this.myNickNames.forEach(
            nickName => console.log(this.myName + " is also known as " + nickName),
        );
    },
};

myself.printMyNickNames(); */

////////////////////////////////////////////////////////////////

// Создай метод counter, который будет будет брать i из this и увеличивать его на 1, а после возвращать i. Используй bind, чтобы установить переменной разные значения.

/* const getCounter = function () {
    return function () {
        return (this.i += 1);
    };
};

const counter1 = getCounter().bind({ i: 0 });
const counter2 = getCounter().bind({ i: 10 });
console.log(counter1());
console.log(counter2()); */

//////////////////////////////////////////////////////////////

// Создай функцию hostGuests, которая вернет имя дома и гостей в нем. Вызовите её с помощью call и apply, задав контекст и гостей как аргумент.

/* const hostGuests = function (...currentGuests) {
    return `${this.house} with ${currentGuests.join(", ")}`;
};

const guests = ["Anna", "Jack", "Jim"];

const place1 = {
    house: "Palace",
};

const place2 = {
    house: "Church",
};

console.log(hostGuests.call(place1, ...guests));
console.log(hostGuests.apply(place2, guests)); */

//////////////////////////////////////////////////////////////////////

// Создайте функцию myPassword, которая будет хранить внутри password и вернет объект с функцией guestPassword(testPassword), которая вернет true, если testPassword и password внутри функции совпадут, и false, если не совпадут. Пример замыкания:

/* const myPassword = function (password) {
    return function (myPassword) {
        return myPassword === password;
    }
};

const testMyPassword = myPassword("myPassThere");

console.log(testMyPassword("123123"));
console.log(testMyPassword("myPassThere")); */

///////////////////////////////////////////////////////////////////////

// Измени анонимную функцию, которая присваивается к result[i] так, чтоб в результате в консоли мы получили числа от 0 до 4 включительно.

/* const result = [];

for (var i = 0; i < 5; i++) {
    const currentI = i;
    result[i] = function () {
        console.log(currentI);
    };
};

result[0]();
result[1]();
result[2]();
result[3]();
result[4](); */

/* for (var i = 0; i < 5; i++) {
    result[i] = function () {
        console.log(i);
    };
}; */ // выводит пятерки

/* for (var i = 0; i < 5; i++) {
    console.log(i);
}; */ // выводит числа от 0 до 4х, но не привязана к result