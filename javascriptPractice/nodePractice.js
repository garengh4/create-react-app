
// The new way, written for OS instead of Browser
function addLastName(lastName, firstName) {
    return firstName + " " + lastName;
}
// run `node nodePractice.js` in terminal
console.log(addLastName("Smith", "John"))

// ----------------------------- spread operator----------------------------------------------------------------
let nameArr = ["Alice", "Bob", "John"]
console.log(nameArr)
let arrCopy = [...nameArr]
console.log(arrCopy)
let arrCopy2 = ["mango", ...nameArr, "cheese"]
console.log(arrCopy2)
// ---------------------------------------------------------------------------------------------------------

const fruits = ["Apple", "Mango", "Cherry"];
fruits.forEach((item, index, array) => {
    console.log(item, index);
});