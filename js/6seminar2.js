// Удалите повторы, оставив phone с самым низким price

const phones = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
  { name: 'Apple', price: 1100 },
  { name: 'Samsung', price: 700 },
  { name: 'Apple', price: 800 },
  { name: 'Huawei', price: 950 },
  { name: 'Samsung', price: 1000 },
  { name: 'Huawei', price: 650 },
];

const removeDublicates = items => {
    return items
        .sort((a, b) => a.price - b.price)
        .filter((item, index, array) => index === array.findIndex(a =>a.name === item.name))
}

// console.log(removeDublicates(phones)); //  {name: "Huawei", price: 650}1: {name: "Samsung", price: 700}2: {name: "Apple", price: 800}

// 2. Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

/* const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
const items2 = ['Huawei', 'Apple', 'ASUS', 'dell', 'BENQ'];

const ascCompare = (prev, next) => {
  return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
}; */

/* const descCompare = (prev, next) => {
  return prev.toLowerCase() < next.toLowerCase() ? 1 : -1;
}; */

/* console.log(items.sort(ascCompare));
console.log(items2.sort(ascCompare));

console.log(items.sort(ascCompare).reverse());
console.log(items2.sort(ascCompare).reverse()); */

// (5) ["ASUS", "BENQ", "dell", "lg", "SAMSUNG"]
// (5) ["Apple", "ASUS", "BENQ", "dell", "Huawei"]
// (5) ["SAMSUNG", "lg", "dell", "BENQ", "ASUS"]
// (5) ["Huawei", "dell", "BENQ", "ASUS", "Apple"]

// 3. Найдите äлемент с самой большой ценой price. Найдите самый минимальный price

const getMostExpensive = items => {
    return items.reduce((acc, item) => {
        return acc.price < item.price ? item : acc;
    });
};

// console.log(getMostExpensive(phones)); // {name: "Apple", price: 1100}

const getLeastExpensive = items => {
    return items.reduce((acc, item) => {
        return acc.price > item.price ? item : acc;
    });
};

// console.log(getLeastExpensive(phones)); // {name: "Huawei", price: 650}

// 4. Найдите цену Apple

const phoness = [
  { name: 'Huawei', price: 800 },
  { name: 'Apple', price: 1000 },
  { name: 'Samsung', price: 900 },
];

// console.log(phoness.find(item => item.name === "Apple").price); // 1000

// 5. Дан массив со строками. Оставьте в нем только те строки, длина которых больше пяти символов

const items = ["SAMSUNG", "LG", "ASUS", "dell", "Microsoft"]

// console.log(items.filter(item => item.length >= 5)); // (2) ["SAMSUNG", "Microsoft"]

// 6. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];

const getMoreThanNull = items => {
    return items.every(item => item > 0);
}

// console.log(getMoreThanNull(positiveNums)); // true
// console.log(getMoreThanNull(positiveAndNegativeNums)); // false

// Проверьте то, что в нем есть отрицательные элементы.

const hasNegaliveEls = items => {
    return items.some(item => item < 0)
}

console.log(hasNegaliveEls(positiveNums)); // false
console.log(hasNegaliveEls(positiveAndNegativeNums)); // true

// Посчитайте количество отрицательных чисел в этом массиве.

const countNegativeEls = items => {
    return items.filter(item => item < 0).length;
}

console.log(countNegativeEls(positiveNums)); // 0
console.log(countNegativeEls(positiveAndNegativeNums)); // 3

// ODER 

const sumReduce = (acc, item) => (item < 0 ? ++acc : acc);
const checkPositiveNums = positiveNums.reduce(sumReduce, 0);
const checkPositiveAndNegativeNums = positiveAndNegativeNums.reduce(
  sumReduce,
  0,
);

// 7. Создать массив из N элементов и запонить его значениями { index: текущий_индекс }

// const array = [];

// for(let i=0; i<3; i++) {
//     array[i]('');
// }

const createArray = number => {
  return Array(number)
    .fill('')
    .map((_, i) => ({ index: i }));
};

console.log(createArray(3)); // (3) [{…}, {…}, {…}]

// 8. Напиши функцию getAllPropValues(propName), которая вернет все значения заданного свойства.

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
  { name: 'Apple', price: 1400 },
];

/* const getAllPropValues = (propName, array) => {
  return array.map(item => item[propName]).filter(val => val  != undefined);
}; */

// ODER
const getAllPropValues = (propName, array) => {
  return array.reduce((acc, item) => {
    if (item.hasOwnProperty(propName)) {
      acc.push(item[propName]);
    }
    return acc;
  }, []);
};


console.log(getAllPropValues("name", products)); // ['Asus', 'Huawei', 'HP', 'Dell', 'Apple']
console.log(getAllPropValues('quantity', products)); // [4, 3, 7, 9] 
console.log(getAllPropValues('category', products)); // []