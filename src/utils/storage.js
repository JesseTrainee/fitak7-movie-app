const saveWatched = (movie) => {
    localStorage.setItem("watched",JSON.stringify(movie));
}
const getWatched = async () => {
    return await JSON.parse(localStorage.getItem("watched"));
}
const saveMustWatch = (movie) => {
    localStorage.setItem("mustwatch",JSON.stringify(movie));
}
const getMustWatch = async () => {
    return await JSON.parse(localStorage.getItem("mustwatch"));
}
const saveID = (id) => {
    localStorage.setItem("id",JSON.stringify(id));
}
const getID = async () => {
    return await JSON.parse(localStorage.getItem("id"));
}

const storage = {
    saveWatched,
    getWatched,
    saveMustWatch,
    getMustWatch,
    saveID,
    getID
}
export default storage;
