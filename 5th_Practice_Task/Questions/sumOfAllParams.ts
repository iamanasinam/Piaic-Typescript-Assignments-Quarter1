// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

export default function funOfsum(...value: number[]){
    console.log("\nTask 6 - Sum of all the numbers in the array\n\nValues in array are : ", value)
    let sum = 0;
    let i = 0;
    while(i < value.length){
        sum += value[i];
        i++;
    }
    console.log(`sum of all the values are  = ${sum}`)
}