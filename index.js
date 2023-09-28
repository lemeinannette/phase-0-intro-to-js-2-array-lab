const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(name){
    cats.push("Ralph")
}
function  destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function  destructivelyRemoveLastCat(){
    cats.pop("rose")
} 
function  destructivelyRemoveFirstCat(){
    cats.shift("Bob")
}
const appendCat = (name) => {
    const newCats = [...cats, name];
    return newCats;
};

const prependCat = (name) => {
    const newCats = [name, ...cats];
    return newCats;
}
const removeLastCat = () => {
    const newCats = cats.slice(0, -1);
    return newCats;
};

const removeFirstCat = () => {
    const newCats = cats.slice(1);
    return newCats;
};