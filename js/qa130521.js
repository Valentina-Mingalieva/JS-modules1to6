// 1. Напишите функцию для хранения скидки. Функция возвращает другую ф-ю, которая принимает сумму покупки и возвращает финальную сумму с сохранённой скидкой

const applyDiscount = (discount) => {
    return (price) => {
        return price - price * discount / 100;
    }
}

const withSilverDiscount = applyDiscount(10);
const withGoldDiscount = applyDiscount(15);

console.log(withSilverDiscount(100));
console.log(withGoldDiscount(150));

// 2. Вы пригласили гостей и хотите посчитать их на входе. Гости иногда выходят и возвращаются.

const guest1 = {
    name: "Ann",
};
const guest2 = {
    name: "Bob",
};
const guest3 = {
    name: "Dan",
};
const guest4 = {
    name: "Jil",
};

class TikTokHouse {
    #guests = new Set();

    addGuest(guest) {
        this.#guests.add(guest);
    }

    get guestCount() {
        return this.#guests.size;
    }
}

const house = new TikTokHouse();
house.addGuest(guest1);
house.addGuest(guest2);
house.addGuest(guest3);
house.addGuest(guest4);

console.log(house.guestCount); // 4

house.addGuest(guest2);
house.addGuest(guest3);

console.log(house.guestCount); // 4

// 3. Создайте записную книжку, куда можно внести имя человека и номер телефона, найти номер по имени, найти кол-во контактов, удалить контакт по имени.

class Contacts {
    #contacts = new Map();

    add(name, phone) {
        this.#contacts.set(name, phone);
    }

    get count() {
        return this.#contacts.size;
    }

    findContact(name) {
        return this.#contacts.get(name);
    }
}

const contacts = new Contacts();

contacts.add("Ann", 123);

console.log(contacts.count); // 1
 
console.log(contacts.findContact("Ann")); // 123

console.log(contacts.findContact("Anna")); // undefined

// 4. 

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`,
    );
  }

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ price = 0, maxSpeed = 0 }) {
    this.speed = 0;
    this.carPrice = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price() {
    return this.carPrice;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  set price(value) {
    if (value > 3000) {
      this.carPrice = 3000;
    } else {
      this.carPrice = value;
    }
  }
  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (this.isOn && this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 300, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

mustang.price = 4000;

Car.getSpecs(mustang);

// 5. Отсортируй массив по height, если они одинаковые - то по age
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const users = [
  {
    firstName: 'Bobby',
    height: 180,
    age: 25,
  },
  {
    firstName: 'Chris',
    height: 160,
    age: 20,
  },
  {
    firstName: 'Peter',
    height: 180,
    age: 15,
  },
  {
    firstName: 'Jimmy',
    height: 170,
    age: 30,
  },
];

users.sort((a, b) => a.height - b.height || a.age - b.age);

console.log(users);

// 6. /**
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы
 * для работы с балансом и историей транзакций.
 */
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const TRANSACTION = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//DRY https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};