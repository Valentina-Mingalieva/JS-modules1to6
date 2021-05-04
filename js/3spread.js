const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
console.log(numbers);

// or // распыли по элементам // like concat

const zahlen = [0, ...[1, 2, 3], 4, 5];
console.log(zahlen);

//

const temps = [18, 24, 4, 29, 21, 15];

console.log(Math.max(...temps))

// 

const one = [1, 2, 3];
const two = [4, 5, 6];
const three = [7, 8, 9];

const all = [...one, ...two, ...three];
console.log(all);

//
