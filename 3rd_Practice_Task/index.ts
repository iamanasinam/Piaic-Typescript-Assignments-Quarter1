// Using conditional statements, check if the number is:
//  - Even or Odd.
//  - Positive, Negative, or Zero.
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

let number = 30;
number = 15;

if (number % 2 === 0) {
    console.log(`\nEven number: ${number}`);
} else {
    console.log(`\nOdd number: ${number}`);
}

if (number > 0) {
    console.log(`\nPositive number: ${number}`);
} else if (number == 0) {
    console.log(`\nZero number: ${number}`);
} else {
    console.log(`\nNegative number: ${number}`);
}

if (number % 2 === 0 && number % 3 === 0) {
    console.log(`\nDivisible by both 2 and 3: ${number}`);
} else if (number % 2 === 0 || number % 3 === 0) {
    console.log(`\nDivisible by either 2 or 3: ${number}`);
} else {
    console.log(`\nNot divisible by both 2 and 3: ${number}`);
}

