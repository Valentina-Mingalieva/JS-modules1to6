// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

/* function countProps(object) {
  let propCount = 0;
 for (key in object) {
    propCount += object.hasOwnProperty(key);
 }
  return propCount;
} */

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

/* function countProps(object) {
  let propCount = 0; 
  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }
  return propCount;
}

countProps({ });
countProps({ name: 'Mango', age: 2 });
countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); */

// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

/* const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
console.log("values:", apartment[key]);
} */


// Используя rest, дополни код функции add()так, чтобы она принимала любое количество аргументов. считала иx и возвращала их сумму.

/* function add(...rest) {
  let total = 0;
  console.log(rest);
  for (const num of rest) {
    total += num;
  }
  console.log('total :>> ', total);
}

add(1, 2, 3, 4, 5); */

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  const keys = Object.keys(salaries);
  const values = Object.values(salaries);
  console.log(keys);
  console.log(values);
  
  for (const value of values) {
    totalSalary += value;
    console.log(totalSalary);
  }
  
  return totalSalary;
};

countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); */

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

/* const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
  
  console.log('hexColors :>> ', hexColors);
  console.log('rgbColors :>> ', rgbColors);
} */

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

/* const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let price;
  
  for (const product of products) {
    
    if (productName === product.name) {
      return price = product.price;
    } 
    
  }
  return null;
} */

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

/* const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const array = [];
  for (const product of products) { 
    if (product[propName] === undefined) {
      return [];
    }
    array.push(product[propName])
  }
  return array;
} */

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

/* const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let sum = 0;
  for (const product of products) {
    if (product.name === productName) {
      sum = product.price * product.quantity;
      return sum;
    }
  }
  return sum;
} */

// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата. Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

/* forecast = {
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}

function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
} */

// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

/* function add(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  console.log(sum);
}
add(15, 27); */

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами. Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента. Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

/* function findMatches(arr, ...args) {
  const matches = []; 
for (const element of args) {
    
    if (arr.includes(element)) {
      matches.push(element);
    }
  }
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); */

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.

/* const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {

    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    
  },
}; */

// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

/* const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
     return this.potions;
  },
}; */

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    this.potions.push(potionName);
  },
}; */

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1);
  },
}; */

// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

/* const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
 const potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);
  },
}; */

// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.
 // {
 //   name: 'Дыхание дракона',
 //   price: 700
 // }
 // Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
 // getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
 // addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
 // removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
 // updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

/* const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  
  addPotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions.includes(potionName)) {
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potionName);
  },
  
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
      }
    };
    return `Зелья ${potionName} нет в инвентаре!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
      };
    };
    return `Зелья ${oldName} нет в инвентаре!`;
  },
};

console.log(atTheOldToad);

atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }); // в массиве potions последним элементом будет этот объект.
atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }); // в массиве potions последним элементом будет этот объект.

atTheOldToad.removePotion('Дыхание дракона'); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ].
atTheOldToad.removePotion('Зелье скорости'); // в свойстве potions будет массив [ { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 } ].

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ].
atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'); // в свойстве potions будет массив [ { name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ]. */