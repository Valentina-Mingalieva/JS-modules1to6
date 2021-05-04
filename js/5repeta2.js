/* class otherCat {
    static miau = "Miau";

    static logInfo(catObj) {
        console.log("cat.logInfo => catObj", catObj);
    }

    constructor({ name, age, breed, price } = {}) {
        //console.log(this);
        this.name = name;
        this.age = 3;
        this.breed = "Britisch";
        this._price = price;
    };

        get price() {
            return this._price;
        }

        set price(newPrice) {
            return this._price = newPrice;
        }

    changeAge(newAge) {
        this.age = newAge;
    };
};

console.log(otherCat);


const otherCat1 = new otherCat({
    name: "Charlie",
    price: 1300,
});

otherCat.logInfo(otherCat1);

const otherCat2 = new otherCat({
    name: "Sammy",
    price: 800,
});

console.log(otherCat.miau);
console.log(otherCat1);
console.log(otherCat2);

console.log(Object.getPrototypeOf(otherCat1) === otherCat1.prototype);

otherCat1.price = 1500; // перезапись значения
console.log(otherCat1.price); */

//////////////////////////////////////////////////

class Hero {
    constructor({ name = "hero", xp = 0} = {}) {
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        console.log(`${this.name} gains ${amount} of experience`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

class Mage extends Hero {
    constructor({ potion, ...restProps } = {}) {
        super(restProps);

        this.potion = potion;
    }

    cast() {
        console.log(`${this.name} spoils with ${this.potion}`);
    }
}
    
const mango = new Warrior({ name: "mango", xp: 1000, weapon: "pistole" });
console.log(mango); // Warrior {name: "mango", xp: 1000, weapon: "pistole"}
mango.attack(); // mango attacks with pistole
mango.gainXp(500); // mango gains 500 of experience

const lili = new Mage({ name: "Lili", xp: 850, potion: "badEggs" });
console.log(lili); // Mage {name: "Lili", xp: 850, potion: "badEggs"}
lili.cast(); // Lili spoils with badEggs
lili.gainXp(250); // Lili gains 250 of experience

console.log(mango.__proto__ === Warrior.prototype); // true
console.log("Warrior.protorype", Warrior.prototype); // Warrior.protorype Hero {constructor: ƒ}
console.log(Warrior.prototype.__proto__ === Hero.prototype); // true

class Berserk extends Warrior {
    constructor({warcry, ...restProps } = {}) {
        super(restProps);

        this.warcry = warcry;
    }

    babyRage() {
        console.log(this.warcry);
    }
}

const Ajax = new Berserk({ name: "Ajax", xp: 980, weapon: "sword", warcry: "waaaaah" });
console.log(Ajax); // Berserk {name: "Ajax", xp: 980, weapon: "sword", warcry: "waaaaah"}
Ajax.babyRage(); // waaaaah
Ajax.attack(); // Ajax attacks with sword
Ajax.gainXp(460); // Ajax gains undefined of experience

//////////////////////////////////////////////////

