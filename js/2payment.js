/* const friends = ["Mango", "Kiwi", "Poly", "Orange"];

console.table(friends);

/// узнать кол-во эл-тов в массиве
const lastIndex = friends.length - 1;
console.log(lastIndex);

// обращение к эл.ту массива и изменение сложного типа
friends[1] = "blabla"; */

// Посчитать кол-во товаров в корзине

/* const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

// 2 сделать переменную total до цикла
let total = 0; */

/* // 1 перебрать массив
for (let i = 0; i < cart.length; i += 1) {
  console.log(cart[i]);
// 3 на каждой итерации элемент приплюсовать к тотал
  total += cart[i];
}
console.log("Total: ", total);
 */
// oder 

/* for (const value of cart) {
  total += value;
}

console.log("Total: ", total); */

/*// добавить налог

 for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i]) * 1.1;
}

// oder

for (let calue of cart) {
  value = Math.round(value * 1.1);
}
console.log(cart);
*/

// А если несколько массивов, работаем с функцией:

const calculateTotalPrice = function (items) {
  console.log("items inside the function: ", items)
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
}

console.log(calculateTotalPrice([54, 28, 105]));
console.log(calculateTotalPrice([70, 92, 17]));
console.log(calculateTotalPrice([120, 12, 25, 90]));
