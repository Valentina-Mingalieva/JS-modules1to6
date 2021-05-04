/* function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function(){
  return this.price;
}

Car.prototype.changePrice = function(newPrice){
  this.price = newPrice;
} */

////////////////////////////

// 6. С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items. Добавь методы на прототип:
// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.

/* function Storage(items) {
 this.items = items;
}  

Storage.prototype.getItems = function() {
    return this.items;
  }

Storage.prototype.addItem = function(newItem){
    this.items.push(newItem);
  }

Storage.prototype.removeItem = function(item) {
    const index = this.items.findIndex(value => value === item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
}
  
// Storage.prototype.removeItem = function(item) {
//  const indexI = this.items.indexOf(item);
//  this.items.splice(indexI, 1);
//  }
   
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"] */


// 12. Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

/* class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems () {
  return this.#items;
};
addItem (newItem) {
  this.#items.push(newItem);
};
removeItem (item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
};
} */

// 7. С помощью Function Declaration напиши функцию-конструктор StringBuilder, которая принимает один параметр baseValue - произвольную строку, которая записывается на создаваемый объект в свойство value. Добавь методы на прототип:
//getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

/* function StringBuilder(baseValue) {
 this.value = baseValue;
} 

StringBuilder.prototype.getValue = function() {
    return this.value;
}

StringBuilder.prototype.padEnd = function(str) {
    this.value=this.value+str;
}

StringBuilder.prototype.padStart = function(str) {
    this.value=str+this.value;
}

StringBuilder.prototype.padBoth = function(str) {
    this.value= str + this.value + str;
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^=' */

// 13. Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.

/* class StringBuilder {
  #value;
  constructor(value) {
  this.#value = value;
}
getValue () {
  return this.#value;
};
padEnd (str) {
  this.#value += str;
};
padStart (str) {
  this.#value = str + this.#value;
};
padBoth (str) {
  this.padStart(str);
  this.padEnd(str);
};
} */

// 11. Объявление приватного свойства до инциализации в конструкторе - обязательно.

/* class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
} */

// 14. Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

/* class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
} */

// 15. Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля. Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

/* class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    	}
    this.#price;
  }
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

// 16. Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

/* class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.';
    	}
    return 'Всё хорошо, цена в порядке.';
};
  constructor({ price }) {
    this.price = price;
  };
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });
console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую. */

// 17. В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список. Объяви класс Admin, который наследует от класса User. Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.
// 18. Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.
// 19. Добавь классу Admin следующие свойства и методы. 
//Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
    static AccessLevel = { 
      BASIC: 'basic',
      SUPERUSER: 'superuser' 
    };

    accessLevel;

    constructor({email, accessLevel}) {
    // Вызов конструктора родительского класса User
      super(email);
      this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];
  
    blacklist(email) {
      this.blacklistedEmails.push(email);
    }
  
    isBlacklisted(email) {
      for (const blacklistedEmail of this.blacklistedEmails) {
        if (blacklistedEmail === email) {
          return true;
        }
      return false;
      }
    }
} 

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true */