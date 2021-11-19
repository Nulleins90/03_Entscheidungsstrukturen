// Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = Number(prompt("Wie alt ist Mark?"));

// //Deklaration
// let isJohnOlder;

// // Test | Logische Aussage

// isJohnOlder = isOlder(ageJohn, ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // // Ausgabe
// // console.log("ageJohn: " + ageJohn);
// // console.log("ageMark: " + ageMark);
// // console.log("isJohnOlder: " + isJohnOlder);
// // console.log("isJohnEqual: " + isJohnEqual);

// if (isJohnOlder) {
//     console.log("John ist älter");
// }
// else if (isJohnEqual) {
//     console.log("John ist genauso alt wie Mark")
// }
// else {
//     console.log("John ist jünger");
// }
// console.log(isOlder);

// function isOlder(first, second) {
//     return first > second;
// }

const firstName = "Jane";
let job;

job = "driver"; 
// job = "diver";
// job = "artist";
// job = "pilot";
// job = "teacher";
// job = "instructor";

// switch (job) {
//     case "driver":
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver":
//         console.log(firstName + " taucht ab.");
//         break;
//     case "artist":
//         console.log(firstName + " malt ein Bild.");
//         break;
//     case "teacher":
//     case "instructor":
//         console.log(firstName + " unterrichtet!")
//         break;
//     default:
//         console.log(firstName + "s handeln ist unbekannt.")
//         break;
// }
const a = 2;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;
    case (a == 2):
        console.log("a ist 2");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;
}