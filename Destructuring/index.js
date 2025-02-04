// Destructuring an Array
let names = ["Adebayor", "Olubisi", "Ogunbiyi"]

let [firstName, middleName,lastName] = names

console.log(firstName);
console.log(middleName);
console.log(lastName);

// Get the first name
let [name1] = names
console.log(name1) // Adebayor

// Get the middle name
let [, name2] = names
console.log(name2) // Olubisi

// Get the last name
let [, , name3] = names
console.log(name3) // Ogunbiyi

// Use the rest operator to get the rest of the names
let [name4, ...restOfNames] = names
console.log(name4) // Adebayor
console.log(restOfNames) // ["Olubisi", "Ogunbiyi"]



// Destructuring an Object
let settings = { theme: "dark", fontSize: 20, fullScreen: true }
let { theme, fontSize, fullScreen } = settings

console.log(theme);
console.log(fontSize);

// Get only the theme, and assign it to a new variable
let { theme: newTheme } = settings
console.log(newTheme);

// Use the rest operator to get the rest of the settings
let { theme: newTheme1, ...restOfSettings } = settings
console.log(newTheme1) // dark
console.log(restOfSettings) // { fontSize: 20, fullScreen: true }



// Destructuring in a function
function getUserInfo({ name, age, club }) {
    console.log("My name is:", name)
    console.log("My age is:" , age)
    console.log("My club is:" , club)
}

const user = {
    name: "John",
    age: 23,
    club: "Chelsea"
}

getUserInfo(user) // John 23




