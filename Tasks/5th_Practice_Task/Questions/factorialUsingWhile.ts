// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

export default function factorialUsingWhile (){

    console.log("\nTask 4 - Factorial of the Positive number\n")

const calculateFactorial = (value: number) =>{
    console.log("Given number: ", value)

    let factorial = 1;
    while (assignedValues>0) {
        factorial = factorial * assignedValues;
        assignedValues--;
    }
    console.log("Factorial is: ",factorial)
}

let assignedValues = 5;

if (assignedValues>0) {
    calculateFactorial(assignedValues)
}else{
    console.log('Please enter a positive integer')
}
}