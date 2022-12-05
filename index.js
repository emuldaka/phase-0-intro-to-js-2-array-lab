// Write your solution here!
var cats=new Array();
cats.push("Milo");
cats.push("Otis");
cats.push("Garfield");
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    return cats.concat(name);
}
function prependCat(name){
    var newArray=[name];
    return newArray.concat(cats);
}
function removeLastCat(name){
    var newArray=cats.concat();
    newArray.pop();
    return newArray;
}
function removeFirstCat(name){
    var newArray=cats.concat();
    newArray.shift();
    return newArray;
}