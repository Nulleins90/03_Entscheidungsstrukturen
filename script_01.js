// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = Number(prompt("Wie alt ist Mark?"));

//Deklaration
let isJohnOlder;

// Test | Logische Aussage

isJohnOlder = isOlder(ageJohn, ageMark);
isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

if (isJohnOlder) {
    console.log("John ist älter");
}
else if (isJohnEqual) {
    console.log("John ist genauso alt wie Mark")
}
else {
    console.log("John ist jünger");
}
console.log(isOlder);

function isOlder(first, second) {
    return first > second;
}