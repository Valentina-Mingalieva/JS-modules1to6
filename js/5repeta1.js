/* const objC = {
    z: 5,
}

const objB = Object.create(objC);
objB.y = 2;

console.log(objC); // {z: 5}
console.log(objC.z); // 5
console.log(objC.hasOwnProperty("z")); // true

console.log(objB); // {y: 5} / __proto__: z: 5 / __proto__: Object
console.log(objB.y); // 2
console.log(objB.z); // 5 

const objA = Object.create(objB);
objA.x = 1;

console.log(objA); // {x: 1} / __proto__: y: 5 / __proto__: z: 5 / __proto__: Object
console.log(objA.x); // 1
console.log(objA.y); // 2
console.log(objA.z); // 5
console.log(objA.hasOwnProperty("z")); // false  */

/////////////////////////////////////////////////////////////////////////////

const Cat = function ({ name, age, breed } = {} ) {
   // const { name, age, breed } = config;
  //  Функция вызывается в контексте созданного объекта, то есть в this записывается ссылка на него.
    this.name = name;
    this.age = age;
    this.breed = breed;
// В свойство this.__proto__ записывается ссылка на объект Cat.prototype, то есть это прототип будущего объекта (экземпляра).
// Ссылка на объект возвращается в место вызова new Cat.
};

console.log(Cat.prototype); // {constructor: f}

Cat.prototype.sayMiau = function () {
    console.log("Cat.prototype.sayMiau -> this", this);
    console.log("Hello :) ");
}

// Усли функция вызывается через оператор new, то создаётся пустой объект.
const myCat1 = new Cat ({
    name: "Tiffany",
    age: 4,
    breed: "SiamCat",
});

console.log(myCat1); // Cat {name: "Tiffany", age: 4, breed: "SiamCat"}
myCat1.sayMiau();

const myCat2 = new Cat ({
    name: "Britney",
    age: 3,
    breed: "BengalCat",
});

console.log(myCat2); // Cat {name: "Britney", age: 3, breed: "BengalCat"}

/////////////////////////////////////////////////////////////////

// Статичные свойства и их методы (доступн только на самом конструкторе, не нужен this)

/* Cat.sayMiau = function () {
    console.log("Cat.prototype.sayMiau -> this", this);
    console.log("Hello :) ");
} // Так как без prototype, не отразится в экземплярах

myCat1.sayMiau(); // nothing happens */

//////////////////////////////////////////////////////////////////

