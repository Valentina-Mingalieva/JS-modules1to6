// Заменить регистр каждого символа в строке на противоположный

/* const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {
    console.log(letter); */

    /* if (letter === letter.toLowerCase()) {
        console.log("Эта буква в нижнем регистре - ", letter);

        invertedString += letter.toUpperCase();
    } else {
        console.log("Эта буква в верхнем регистре - ", letter);
        invertedString += letter.toLowerCase();
    } */

/*     invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log("invertedString: ", invertedString);  */

// написать функцию changeCase

const changeCase = function (string) {
    const letters = string.split("");
    let invertedString = "";

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }

    return invertedString;
}

console.log(changeCase("qweRTY"));
console.log(changeCase("mango"));
console.log(changeCase("AjAx"));