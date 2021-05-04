// FOR EACH()

/* const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
    console.log("number", number);
});

console.log(numbers); // number 5, number 10, number 15, number 20, number 25 // (5) [5, 10, 15, 20, 25] */

// MAP()

/* const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Apple", timePlayed: 340, points: 56, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 240, points: 51, online: true },
    { id: "player-4", name: "Orange", timePlayed: 570, points: 64, online: false },
    { id: "player-5", name: "Banana", timePlayed: 830, points: 78, online: false },
];

// получить массив имен игроков

const playerNames = players.map(player => player.name);
console.log("playerNames", playerNames); // playerNames (5) ["Mango", "Apple", "Kiwi", "Orange", "Banana"]

const playerIds = players.map(player => player.id);
console.log("playerIds", playerIds); // playerIds (5) ["player-1", "player-2", "player-3", "player-4", "player-5"]

const res = players.map(({ name, online }) => ({ name, online }));
console.log("res", res); // res (5) [{…}, {…}, {…}, {…}, {…}]

// увеличить количество очков каждого игрока на 10%

const updatePoints = players.map(player => {
    return { ...player, points: player.points * 1.1 };
});
console.log(updatePoints);

// получить массив online игроков

const onlinePlayers = players.filter(player => player.online);
console.log(onlinePlayers);

// получить массив offline игроков

const offlinePlayers = players.filter(player => !player.online);
console.log(offlinePlayers);

// получить список игроков с временем больше 350

const longPlayers = players.filter(player => player.timePlayed > 350);
console.log(longPlayers);

// увеличить количество часов игрока по id

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map(player =>
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100 }
        : player,
);
console.log(updatedPlayers); // {id: "player-3", name: "Kiwi", timePlayed: 340, points: 51, online: true} 

// найти игрока по id

const playerIdToFind = "player-1";
const playerWithId = players.find(({id}) => id === playerIdToFind);
console.log(playerIdToFind);

// общее количество часов
const totalTime = players.reduce(
    (acc, player) => acc + player.timePlayed, 0);
console.log(totalTime); // 2290
*/

// FILTER()

/* const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = numbers.filter(number => number > 15);
console.log(filteredNumbers); //[20, 25] */

// FIND()

/* const numbers = [5, 10, 15, 20, 25];
const number = numbers.find(number => number > 15);
console.log(number); //[20] */

// SOME() & EVERY()

/* const isAllOnline = players.every(player => player.online);
console.log(isAllOnline); // false

const isAnyOnline = players.some(player => player.online);
console.log(isAnyOnline); // true */

// REDUCE()
// 0 - значение acc на первой итерации
// результaт предыдущей итерации

/* const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total); // 75 */

/* const salary = {
    mango: 100,
    kiwi: 120,
    ajax: 90,
}

const totalSalary = Object.values(salary).reduce((acc, value) => acc + value, 0);
console.log(totalSalary); // 310 */

// Выбрать все теги и подсчитать их количество

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);

console.log(getTags(tweets)); // (12) ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

const tags = getTags(tweets);

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//////////// ODER 

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags); // (12) ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

const tagStats = allTags.reduce(
    (acc, tag) => ({
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }), {});

console.log(tagStats); // {js: 3, nodejs: 3, html: 2, css: 2, react: 2}