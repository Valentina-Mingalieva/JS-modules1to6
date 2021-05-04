let instance = null;
console.log(typeof instance === "object"); // true, da null это базовый тип объекта

let instances = undefined;
console.log(typeof instances === "object"); // false, da undefined  это особый тип и отношения к объекту не имеет

// Создайте объект animal, который будет иметь свойство voice и метод getVoice, который будет это свойство выводить в консоль. Отнаследуйтесь от animal и измените voice. Выведите результат getVoice всех объектов.

/* const animal = {
    voice = "none",
    getVoice() {
        console.log(this.voice);
    },
};

const cat = Object.create(animal);
cat.voice = "meow";

animal.getVoice(); // none
cat.getVoice(); // meow 

const animalClone = Object.assign({}, animal);
animalClone.getVoice(); */

// Создай конструктор объекта со свойствами page links[] и photos[], добавь к прототипу объекта методы, которые выведут количество links и photos.

/* const Page = function (links, photos) {
    this.links = links ?? [];
    this.photos = photos ?? [];
}

Page.prototype.getLinksCount = function () {
    return this.links.length;
}

Page.prototype.getPhotosCount = function () {
    return this.photos.length;
}

const page = new Page(["link1", "link2"], ["photo1"]);
console.log(page.getLinksCount());
console.log(page.getPhotosCount());

page.__proto__.getAllCount = function () {
    return this.links.length + this.photos.length;
};
console.log(page.getAllCount()); */

// создай конструктор объекта User, который будет принимать access и отнаследуй от него Manager, который будет принимать ещё documents. Создай 2 экземпляра и найди среди них менеджера.

/* const User = function (access) {
    this.access = access;
};

const Manager = function (access, documents) {
    User.call(this, access);
    this.documents = documents;
};

const user1 = new User(10);
const user2 = new User(10);
const user3 = new User(10);
const manager1 = new Manager(15, 3);
const manager2 = new Manager(15, 3);
const manager3 = new Manager(15, 3);

const array = [user1, manager1, user2, user3, manager2, manager3];

for (const item of array) {
    if (item.hasOwnProperty("documents")) {
        console.log(item, "this is manager");
    };
}; */

// Создай корабль, который умеет стрелять и отнаследуй от него боевой корабль

/* const Ship = function (country, hp, captain, price) {
    this.country = country;
    this.hp = hp;
    this.captain = captain;
    this.price = price;
    this.fire = function () {
        console.log(`Hi from ${this.country}`);
    };
};

const Warship = function (armor, ...args) {
    Ship.apply(this, args);
    this.armor = armor;
} */

/* Ship.prototype.fire = function () {
    console.log(`Hi from ${this.country}`);
} */
// При apply всё, что есть в прототипе, не копируется => ничего бы не появилось (мы бы убрали this.fire). Чтобы это сделать:
/* Warship.prototype = Object.create(Ship.prototype);
Warship.prototype.constructor = Warship; */

/* const warShip1 = new Warship("bomb", "USA", 100, "Jack Sparrow", 1999);
console.log(warShip1); // Warship {country: "USA", hp: 100, captain: "Jack Sparrow", price: 1999, fire: ƒ, …}
warShip1.fire(); // Hi from USA */

// 

/* const animal = { jumps: null };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);

console.log(1, rabbit.jumps); // 1 true, own property

delete rabbit.jumps;
console.log(2, rabbit.jumps); // 2 null owned from parent

delete animal.jumps;
console.log(3, animal.jumps); // 3 undefined cause there is no more such a property

function Rabbit() { }
Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();
rabbit2.eats = false;

delete Rabbit.prototype.eats;
console.log(4, rabbit2.eats); // 4 false cause deleted from the prototype / parent
 */