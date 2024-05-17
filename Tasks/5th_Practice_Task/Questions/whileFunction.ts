// Write a program that uses a while loop to print the first 25 integers.
export default function whileFunctions() {
  console.log("\nTask 3 - uses a while loop to print the first 25 integers & first 10 even numbers \n");

  let integers: number = 0;
  let twentyFifthValue: number = 1;
  console.log(`\nfirst 25 integers`);
  while (twentyFifthValue <= 25) {
    console.log(twentyFifthValue, "integer is : ", integers);
    integers++;
    twentyFifthValue++;
  }

  //  - Write a program that uses a while loop to print the first 10 even numbers.
  let evenNumbers: number = 0;
  let integer: number = 1;
  console.log(`\nFirst 10 even numbers`);
  while (integer <= 10) {
    console.log(integer, " even number is : ", evenNumbers);
    integer += 1;
    evenNumbers += 2;
  }
}
