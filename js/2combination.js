// Скрипт, который объединяет все элементы массива в одно страковое значение. Элементов может быть произвольное количество. Элементы должны быть разделены запятой.

const friends = ["Mango", "Kiwi", "Apple", "Orange", "Banane"];

/* let string = "";

for (const friend of friends) {
    string += friend + ",";
}

string = string.slice(0, string.length - 1);
console.log(string); */

// oder

const string = friends.join(", ");
console.log(friends);
console.log(string);