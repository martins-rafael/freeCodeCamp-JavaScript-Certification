// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
    return title
        .toLowerCase()
        .split(/\W/)
        .filter(str => str)
        .join('-')

}
// Only change code above this line
console.log(urlSlug(globalTitle))