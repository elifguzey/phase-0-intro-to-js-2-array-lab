// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift (name)
    return cats
}
function destructivelyRemoveLastCat (name) {
  cats.pop ("Garfield")
    return cats
}
function destructivelyRemoveFirstCat(name) {
    cats.shift ("Milo")
    return cats
}

function appendCat(name) {
    const newCat= [...cats]
    newCat.push (name)
    return newCat
}
function prependCat (name) {
    const newCat= [...cats]
    newCat.unshift (name)
    return newCat
}
function removeLastCat (name) {
    const copyOfCats = cats.slice();
    copyOfCats.pop()
    return copyOfCats
}
function removeFirstCat (name) {
    const copyOfCats = [...cats];
    copyOfCats.shift()
    return copyOfCats
}