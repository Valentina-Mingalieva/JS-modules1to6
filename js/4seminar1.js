// MAP 

const users = [
    { name: "Alex", age: 27 },
    { name: "Poly", age: 16 },
];

console.log(users.map(user => user.age)); // [27, 16]

// 

const numbers = [1, 2, 3];
const multiplyNumber = numbers.map(number => number * 2);
console.log(multiplyNumber); // [2, 4, 6]
// oder 
const multiplyNumber = number => number * 2;
console.log(numbers.map(multiplyNumber)); // [2, 4, 6]

// СЧЕТЧИК (замыкание)

const main = () => {
    let n = 1;
    function count(value) {
        if (value) { // для обнуления
            n = value;
        }
        console.log(n);
        n++;
    };
    return count;
};

const count = main();
count() // 1
count() // 2
count() // 3