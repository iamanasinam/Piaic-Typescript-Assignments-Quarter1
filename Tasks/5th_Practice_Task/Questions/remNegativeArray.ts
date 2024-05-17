// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

export default function remNegativeNumber(...number: number[]){
    console.log('\nTask 5 - Removing Negative number from array\n ')
    let array : number[] = number;
    console.log("Array before removing Negative number from array", array);

for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
        array.splice(i,1);
        i--;
    }
}

    console.log("After Removing negative number from array", array)
}
