// Write your solution here!

const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
        cats.push(name)
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
return cats
}
function destructivelyRemoveLastCat() {
    cats.pop ()
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.shift ()
    return cats
}
function appendCat(name) {
    const copyofcats = [...cats, (name)]
return copyofcats
}
function prependCat(name) {
    const copyofcats = [(name),...cats,]
return copyofcats
}
function removeLastCat(){
    const copyofcats=cats.slice(0,2)
        return copyofcats
}
function removeFirstCat(){
    const copyofcats=cats.slice(1)
        return copyofcats
}