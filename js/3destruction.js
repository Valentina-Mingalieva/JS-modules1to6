const playlist = {
    name: "playlist",
    rating: 5,
    tracks: ["track1", "track2", "track3"],
    trackCount: 3,
};

const { name, rating, tracks, trackCount } = playlist;

console.log(
    rating,
    name,
    tracks,
    trackCount,
);

// rename

const { name, rating, tracks, trackCount: numberOfTracks } = playlist;

console.log(
    rating,
    name,
    tracks,
    numberOfTracks,
);

// set default

const playlist = {
    name: "playlist",
    rating: 5,
    tracks: ["track1", "track2", "track3"],
}

const { name, rating, tracks, numberOfTracks = 0 } = playlist;

console.log(
    rating,
    name,
    tracks,
    numberOfTracks,
);

// декструктуризация массива

const rgb = [255, 100, 80];

const [a, b, c] = rgb;

console.log(a, b, c);

// пропуск свойства

const [a, , c] = rgb;

// FIND THE BIGGEST RATING

const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 6,
    mango: 9,
}

const ratings = Object.values(authors);

// console.log(Math.max(...ratings));

// FIND THE BIGGEST RATING WITH NAME

const keys = Object.keys(authors);

for (const key of keys) {
    console.log(key);
    console.log(authors[key]);
}

// console.log(Math.max(...ratings));

// по значению получить имя ключа

const entries = Object.entries(authors);


for (const [name, rating] of entries) {
    console.log(name, rating);
}