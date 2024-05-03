var value = function (number) {
    if (number % 2 === 0) {
        console.log("\nEven number: ".concat(number));
    }
    else {
        console.log("\nOdd number: ".concat(number));
    }
    if (number > 0) {
        console.log("\nPositive number: ".concat(number));
    }
    else if (number == 0) {
        console.log("\nZero number: ".concat(number));
    }
    else {
        console.log("\nNegative number: ".concat(number));
    }
    if (number % 2 === 0 && number % 3 === 0) {
        console.log("\nDivisible by both 2 and 3: ".concat(number));
    }
    else if (number % 2 === 0 || number % 3 === 0) {
        console.log("\nDivisible by either 2 or 3: ".concat(number));
    }
    else {
        console.log("\nNot divisible by both 2 and 3: ".concat(number));
    }
};
value(7);
