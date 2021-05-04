// Написать функцию filterNumbers(array [, number1, ...]), которая первым аргументом принимает массив чиселб далее может следовать произвольное количество других аргументов - чисел. Функция долна вернуть новый массив, в котором будут только те аргументы, начиная со второго, для которых есть аналог в оригинальном массиве.

/* const filterNumbers = function (array, ...args) {
    console.log("array: ", array);
    console.log("args: ", args);
    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);

            console.log("${element} is there!");
        };
    }

    return uniqueElements;
};


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); */