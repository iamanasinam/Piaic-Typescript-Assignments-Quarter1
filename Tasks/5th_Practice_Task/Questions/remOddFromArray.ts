// Write a program to remove all the odd numbers from an array.

export default function removeOddNumbers(...number: number[]){
    console.log(`\nTask 8 - Remove all the odd numbers from an array\n\nArray Before`, number);
let newArr = [];

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        newArr.push(number[i]);
    }
}
console.log("After removing Odd numbers",newArr)
}