// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin (user){
    if(user.userRole == 'ADMIN'){
        return true
    }
    if(user.userRole != 'ADMIN'){
        return false
    }
}
function getEmail (user){
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`
}
function getPlaylistLength (playlist){
    return playlist.songs.length
    if(playlist.songs.length == undefined){
        playlist.songs = []
        return playlist.songs.length
    }
}
function getHardestHomework (homeworkArr){
    if (homeworkArr.length == 0){
        return ''
    }
    if(homeworkArr.length > 0){
        let hardestHomework = homeworkArr[0]
        homeworkArr.forEach(assignment => {
            if(assignment.averageScore < hardestHomework.averageScore){
                hardestHomework = assignment
            }
        });
        return hardestHomework.name
    }
}
function createPhonebook(people,numbers){
    let phonebook = []
    let ctr = 0
    people.forEach(person => {
        phonebook.push(`${person}:${numbers[ctr]}`)
        ctr++
    })
    console.log(phonebook)
    return phonebook
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};