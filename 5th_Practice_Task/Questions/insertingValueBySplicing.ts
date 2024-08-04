// Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.

export default function addingValue (arrayy: number[], index: number, value: number){
    let funArr= arrayy.splice(0)
    funArr.splice(index, 0, value);
    return funArr;
}

let myArray = [1, 2, 3, 4, 5]
console.log(`Task 1 - Using the splice method to insert the value at the specified index in the array\n`)
console.log("Before inserting value", myArray)
let position = 2;
console.log("value going to be inserted at position : ",position+1,"\nAfter inserting Value: ",addingValue(myArray, position, 100));