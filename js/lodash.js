// Lodash - библиотека для методов массивов

console.log(_); // f

// isEmpty()
console.log(_.isEmpty({})); // true
console.log(_.isEmpty({ a: 1 })); // false

// get()

const user = {
    name: "mango",
    location: {
        coords: [1, 2],
        city: "paris",
    },
};
console.log(_.get(user, "location.city")); // paris

console.log(user?.location?.city); // paris

// union()

console.log(_.union([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// range([start=0], end, [step=1]) 
// in [] is not necessary to define, there is a default meaning

console.log(_.range(1, 5)); // [1, 2, 3, 4] // start and end, default step 1

console.log(_.range(5));// [0, 1, 2, 3, 4] // default start 0, step 1

console.log(_.range(1, 11, 2)); // [1, 3, 5, 7, 9]

// sortBy() // Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. 

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 },
];
 
console.log(_.sortBy(users, ["user", "age"])); // barney 34, barney 36, fred 40, fred 48

// sum()

console.log(_.sum([1, 2, 3, 45])); // 51

// sumBy()

const players = [
    { id: "player-1", name: "Mango", time: 310, points: 54, online: false },
    { id: "player-2", name: "Apple", time: 340, points: 56, online: true },
    { id: "player-3", name: "Kiwi", time: 240, points: 51, online: true },
    { id: "player-4", name: "Orange", time: 570, points: 64, online: false },
    { id: "player-5", name: "Banana", time: 830, points: 78, online: false },
];

console.log(_.sumBy(players, player => player.time)); // 2290

// uniq()
// uniqBy()
// sortedUniq()
// sortedUniqBy()
// random()
// minBy()

console.log(_.maxBy(players, player => player.time)); // {id: "player-5", name: "Banana", time: 830, points: 78, online: false}

// maxBy()

console.log(_.minBy(players, player => player.time)); // {id: "player-3", name: "Kiwi", time: 240, points: 51, online: true}

// min()
// max()

// camelCase()

console.log(_.camelCase("Meet the LMS putting collaboration at the heart of the learning by connecting")); // meetTheLmsPuttingCollaborationAtTheHeartOfTheLearningByConnecting

// capitalize()

console.log(_.capitalize("Meet the LMS putting collaboration at the heart of the learning by connecting")); // Meet the lms putting collaboration at the heart of the learning by connecting

// kebabCase()

console.log(_.kebabCase("Meet the LMS putting collaboration at the heart of the learning by connecting")); // meet-the-lms-putting-collaboration-at-the-heart-of-the-learning-by-connecting

// lowerCase()

console.log(_.lowerCase("Meet the LMS putting collaboration at the heart of the learning by connecting")); // meet the lms putting collaboration at the heart of the learning by connecting

// upperCase()

console.log(_.upperCase("Meet the LMS putting collaboration at the heart of the learning by connecting")); // MEET THE LMS PUTTING COLLABORATION AT THE HEART OF THE LEARNING BY CONNECTING