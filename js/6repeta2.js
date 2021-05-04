// SORT
// сортирует по возрастанию (по умолчанию), при этом приводит к строке и руководствуется кодом символа по unicode

const numbers = [1, 9, 6, 2, 3];
// numbers.sort(); // [1, 2, 3, 6, 9]
numbers.sort((currEl, nextEl) => {
    // return currEl - nextEl; // default [1, 2, 3, 6, 9]
    // return nextEl - currEl; // [9, 6, 3, 2, 1] // like reverse()
})
console.log(numbers);

const letters = ["d", "f", "s", "a", "N", "b", "A"];
// letters.sort(); // ["A", "N", "a", "b", "d", "f", "s"]
console.log(letters);

// make a copy

const copy = [...numbers];
console.log(copy === numbers); // false
copy.sort();
console.log("copy", copy); // [1, 2, 3, 6, 9]

// ODER 

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("descSortedNumbers", descSortedNumbers); //  [9, 6, 3, 2, 1]
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("ascSortedNumbers", ascSortedNumbers); // [1, 2, 3, 6, 9]

////////////////////////////////////////

const players = [
    { id: "player-1", name: "Mango", time: 310, points: 54, online: false },
    { id: "player-2", name: "Apple", time: 340, points: 56, online: true },
    { id: "player-3", name: "Kiwi", time: 240, points: 51, online: true },
    { id: "player-4", name: "Orange", time: 570, points: 64, online: false },
    { id: "player-5", name: "Banana", time: 830, points: 78, online: false },
];

const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.time - prevPlayer.time);
console.log(sortedByBestPlayers); // отсортировали по времени по убыванию

const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.time - nextPlayer.time);
console.log(sortedByWorstPlayers); // по возрастанию

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];
    if (result) { return 1 };
    if (!result) { return -1 };
})
console.log(byName); // von A bis Z

// FLAT(depth)
// разглаживает массив до указанной глубины
// по умолчанию глубина 1

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat()); // [1, 2, 4, [5], 6, [7, 8, [9]]]
console.log(array.flat(2)); // [1, 2, 4, 5, 6, 7, 8, [9]]

/////////////////////////////////

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

//  перепишем это с помощью map + flat

/* const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags); // (12) ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react" */

const tags = tweets.map(t => t.tags).flat();
console.log(tags); // (12) ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

// ODER 
const tagss = tweets.flatMap(t => t.tags);
console.log(tagss); // (12) ["js", "nodejs", "html", "css", "html", "js", "nodejs", "css", "react", "js", "nodejs", "react"]

/// CHAINING

const nummern = [1, 5, 4, 2, 3];

const sorted = nummern.
    filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
console.log(sorted); // [9, 12, 15]

// LIBRARIES

// Lodash - библиотека для методов массивов
// underscorejs