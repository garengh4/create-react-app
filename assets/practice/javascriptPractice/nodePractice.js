
// The new way, written for OS instead of Browser
function addLastName(lastName, firstName) {
    return firstName + " " + lastName;
}
// run `node nodePractice.js` in terminal
console.log(addLastName("Smith", "John"))

// ---------------------------------------------------------- spread operator ----------------------------------------------------------
let nameArr = ["Alice", "Bob", "John"]
console.log(nameArr)
let arrCopy = [...nameArr]
console.log(arrCopy)
let arrCopy2 = ["mango", ...nameArr, "cheese"]
console.log(arrCopy2)
// ---------------------------------------------------------- promise ----------------------------------------------------------
let myPromise = new Promise((resolve, reject) => {
    let myTimeout = setTimeout(() => {
        resolve("success timeout");
    }, 1000);
    let errTimeout = setTimeout(() => {
        reject("error timeout");
    }, 2000);
});
myPromise
    .then(value => console.log(value))
    .catch(err => console.log(err));
// ---------------------------------------------------------- axios ----------------------------------------------------------
let axios = require("axios")

// run json-server --watch empdb.json in terminal
axios.get("http://localhost:3000/employees/3")
    .then(resp => {
        console.log("-----------------------------------------------")
        console.log(resp.data)
        console.log("-----------------------------------------------")
    }).catch(err => { 
        console.log(err)
    })
// run `node nodePractice.js` in terminal