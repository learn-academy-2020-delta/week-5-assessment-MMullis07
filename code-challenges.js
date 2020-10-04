// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
//declare a function that takes in a string
const secrets = (str) => {
    //splitting the string into an array so you can iterate over the letters
    let arrayOfCode = str.split("")
    // mapping through each letter of an array to code
    return arrayOfCode.map(letter => {
        //creating if/else statements for each letter to code
        if (letter.toLowerCase() === "a"){
            return letter = 4
        }
        else if (letter.toLowerCase() === "e"){
            return letter = 3
        }
        else if (letter.toLowerCase() === "i"){
            return letter = 1
        }
        else if (letter.toLowerCase() === "o"){
            return letter = 0
        }
        // if the letter doesnt need to be coded, return the letter back as normal
        else{
            return letter
        }
        //joining the array of letters back into a string
        }).join("")
    }
console.log(secrets(secretCodeWord1))
console.log(secrets(secretCodeWord2))




// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//declare a function that takes in an array
const arrayofAs = (arr, letter) => {
    //filter through the array and look for words that contain a
    let isA = arr.filter(letter => letter.includes('a'))
    //return those words that do include a
    return isA
}
console.log(arrayofAs(arrayOfWords))





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
//declare a function that will take in an array
const fullHouse = (argArray) => {
    //Create an empty array that will hold the unique values from argument array
    answerArray = []
    //Map of the array to push single instance of each unique value to the new array
    argArray.map(value => answerArray.include(value) ? "" : answerArray.push(value))
    // If there is more than two unique values it immediately cannot be a full house so return false
    if (answerArray.length !== 2) {
        return false
    //If it does only have two unique values map over the elements of the new array twice.
    //While doing that we will filter the argument array, if they match an element in the at the mapped array's current index twice return true for that iteration. 
    //If any iteration of the map returns true then the entire function is true.
    } else if (answerArray.map((value, index) => argArray.filter(value => value === answerArray[index]).length === 2).includes(true)) {
        return true
    // Catcha all else to return false for the function
    } else {
        return false
    }
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))