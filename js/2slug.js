// Делаем slug в URL из названия статьи.Заголовок состоит только из букв и пробелов.URL

// 1 Нормализуем строку
// 2 Разбиваем по словам
// 3 Сшиваем в строку с разделителями

/* const title = "Top 10 benefits of Reakt framework";

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(" ");
// console.log(words);

const slug = words.join("-");
// console.log(slug);

// oder

const slug1 = title.toLowerCase().split(" ").join("-");

console.log(slug1); */

// НАПИСАТЬ ФУНКЦИЮ

const slugify = function (string) {
    /* const normalizedTitle = title.toLowerCase();
    const words = normalizedTitle.split(" ");
    const slug = words.join("-");
    
    return slug;*/

    return string.toLowerCase().split("").join("-");
}

console.log(slugify("Top 10 benefits of React framework"));