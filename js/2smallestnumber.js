// Найти самое маленькое число в массиве

/* const numbers = [51, 18, 13, 24, 7, 85, 18];
let smallestNumber = numbers[0];

console.log(smallestNumber);

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log("smallestNumber: ", smallestNumber); */

// самое большое

/* let biggestNumber = numbers[0];

console.log(biggestNumber);

for (const number of numbers) {
    if (number > biggestNumber) {
        biggestNumber = number;
    }
}

console.log("biggestNumber: ", biggestNumber); */

// делаем функцию

const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];
    
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }

    return smallestNumber;
}

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));