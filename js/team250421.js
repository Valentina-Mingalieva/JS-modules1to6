/////////////////////

// Функция, которая вызывает action (метод) и делает манипуляции с инвентарем (удаляет или добавляет)
/* invokeInventoryAction.call(inventory, "Medkit", inventory.add);
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
invokeInventoryAction.call(inventory, "Gas mask", inventory.remove);
console.log(inventory.items); // ['Knife', 'Medkit'] */

/* const inventory = {
    items: ['Knife', 'Gas mask'],

    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },

    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);
        for (let i = 0; i < this.items.length; i++) {
            if (itemName === this.items[i]) {
                this.items.splice(this.items.indexOf(itemName), 1);
            };
        };
    },
};

const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
console.log(inventory.items);

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
console.log(inventory.items); */

// ODER 

/* const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
        console.log(Adding ${itemName} to inventory);

        this.items.push(itemName);
        // метод, добавляющий новый инвентарь (itemName) в массив items
    },
    remove(itemName) {
        console.log(Removing ${itemName} from inventory);

        this.items = this.items.filter(item => item !== itemName);
        // метод, удаляющий инвентарь (itemName) из массива items
    }
};

const invokeInventoryAction = function (itemName, action) {
    console.log(Invoking action on ${itemName});
    action.call(this, itemName);

}; */

/////////////////////////////////////////////////////

/* Светофор
Вы пишите код для правильно работы светофоров на дорогах вашего города, поэтому напишите функцию, которая будет принимать в себя текущий цвет светофора, а возвращать цвет, в который он должен перейти. Учитывайте то, что после красного, всегда загорается зеленый, а после зеленого желтый, а затем красный.
Пример кода:
updateLight('Зелёный') => 'Жёлтый'
updateLight('Жёлтый') => 'Красный'
updateLight('Красный') => 'Зелёный' 

const updateLight = function (color) {
    switch (color) {
        case 'Зелёный':
            console.log("Жёлтый");
            break;
        case 'Жёлтый':
            console.log('Красный');
            break;
        case 'Красный':
            console.log('Зелёный');
            break;
    };
};

updateLight('Зелёный');*/

/////////////////////////////////////////////////

// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

/* const multiplication = function (array) {
    for (let i = 0; i < array.length-3; i ++) {
        const result = array[i] * array[i + 1] + array[i + 2] * array[i + 3];
        console.log(result);
    }
};

const elements = [2, 5, 3, 9, 1, 5, 7, 8];
multiplication(elements);
 */

//////////////////////////////////////

/* const box = function (x, y, getAction) {
    const result = getAction (x, y);
    console.log(result);
    }

function action(x, y) {
    return x * y;
}
    
box(2, 5, action); */

// UND

/* const box = function (x, y, getAction) {
    const perimetr = getAction (x, y);
    console.log(perimetr);
    }

function action(x, y) {
    return 2 * (x + y);
}
    
box(2, 5, action); */