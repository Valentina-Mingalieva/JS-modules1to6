const friends = [
    { name: "Mango", online: false },
    { name: "Kiwi", online: true },
    { name: "Apple", online: true },
    { name: "Orange", online: false },
];

// find a friend by name

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.name);
        if (friend.name === friendName) {
            return "found";
        };
    }
    return "not found";
};

console.log(findFriendByName(friends, "Orange"));
console.log(findFriendByName(friends, "Pineapple"));

// get names of all friends

const getAllNames = function (allFriends) {
    const names = [];

    for (const friend of friends) {
        console.log(friend.name);
        names.push(friend.name);
    }
    return names;
}

console.log(getAllNames(friends));

// get names of all online friends

const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (friend.online) {
            onlineFriends.push(friend);
        }
    }
    return onlineFriends;
}

console.log(getOnlineFriends(friends));

// get names of all offline friends

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);

        if (!friend.online) {
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
}

console.log(getOfflineFriends(friends));

// divide all friends in 2 arrays by their status

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {

        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;
        } 
            friendsByStatus.offline.push(friend);
    }
    return friendsByStatus;
}

console.log(getFriendsByOnlineStatus(friends));

// how many friends are in the array

console.log(Object.keys(friends).length);