// 2. Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    })
    return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));

// 3. Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    })
    return commonElements;
  }

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]

// 8. Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

/* const getCommonElements =(firstArray, secondArray) => {
    const commonElements = [];
    firstArray.forEach(element => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
    return commonElements;
} */

// 9. Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value. Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  const newArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            number += value;
        }
        newArray.push(number);
    });
    return newArray;
};
  
changeEven([44, 13, 81, 92, 36, 54], 100); // [144, 13, 81, 192, 136, 154]

// 16.

const books = [
    { title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']},
    { title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']},
    { title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']}
];
  
const allGenres = books.flatMap(book => book.genres);

const uniqueGenres = allGenres.filter(
    (genre, index, array) => array.indexOf(genre) === index
);
    
// 17. Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.

/* const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR); */

// 18. Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

// 19. Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge)
};

// 20. Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [Sharlene Bush, Sheree Anthony]

// 21. Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = (users) => {
  return users
    .flatMap(user => user.friends)
    .filter(
    (friend, index, array) => array.indexOf(friend) === index)
};

// 30. Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, playtime) => {
  return acc + playtime;
});

const averagePlayTime = totalPlayTime / playtimes.length;

// 31. Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
    return acc + (player.playtime / player.gamesPlayed);
}, 0);
console.log(totalAveragePlaytimePerGame); // 1023

// 32. Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

const calculateTotalBalance = users => {
    const totalBalance = users.reduce((acc, user) => {
        return acc + user.balance
    }, 0);
    return totalBalance;
};

// 33. Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = users => {
    const totalFriends = users.flatMap(user => user.friends);
    return totalFriends.length;
};

// ODER

const getTotalFriendCount = users => 
    users.reduce((acc, user) => {
        return acc += user.friends.length
    }, 0);

// 34. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// 35. Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// 36. 