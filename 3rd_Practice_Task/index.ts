// Using conditional statements, check if the number is:
//  - Even or Odd.
//  - Positive, Negative, or Zero.
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

// let number = 30;
// number = 15;

// if (number % 2 === 0) {
//     console.log(`\nEven number: ${number}`);
// } else {
//     console.log(`\nOdd number: ${number}`);
// }

// if (number > 0) {
//     console.log(`\nPositive number: ${number}`);
// } else if (number == 0) {
//     console.log(`\nZero number: ${number}`);
// } else {
//     console.log(`\nNegative number: ${number}`);
// }

// if (number % 2 === 0 && number % 3 === 0) {
//     console.log(`\nDivisible by both 2 and 3: ${number}`);
// } else if (number % 2 === 0 || number % 3 === 0) {
//     console.log(`\nDivisible by either 2 or 3: ${number}`);
// } else {
//     console.log(`\nNot divisible by both 2 and 3: ${number}`);
// }

// - Take the user age.
// -- If the age is 18 or above:
// -- Ask if they have a nationality of "Pakistani".
//   ---If yes, print "You are eligible to vote."
//   ---If no, print "Please obtain a valid ID to vote."

// let age = 17;
// let nationality = "Pakistani";

// if (age >= 18) {
//     if (nationality == "Pakistani") {
//         console.log(`\nYou are eligible to vote.`);
//     } else {
//         console.log(`\nPlease obtain a valid ID to vote.`);
//     }
// } else {
//     console.log(`\n\nYou are In-eligible to vote.`);
// }

// - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

let age = 20;

if (age >= 0 && age <= 12) {
    console.log(`\nChild: ${age}`);
} else if (age >= 13 && age <= 19) {
    console.log(`\nTeenager: ${age}`);
} else if (age >= 20 && age <= 59) {
    console.log(`\nAdult: ${age}`);
} else if (age >= 60) {
    console.log(`\nSenior Citizen: ${age}`);
} else {
    console.log(`\n\nInvalid Age: ${age}`);
}
