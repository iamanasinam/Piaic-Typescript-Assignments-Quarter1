import insertingValueBySplicing from './Questions/insertingValueBySplicing'
import { addItem, updateItem, removeItem, shoppingCart } from './Questions/functionsCrudSplice';
import whileFunctions from './Questions/whileFunction';
import factorialUsingWhile from './Questions/factorialUsingWhile';
import remNegativeNumber from './Questions/remNegativeArray';
import funOfsum from './Questions/sumOfAllParams';
import convertTemperatureToFahrenheit from './Questions/tempWhile';
import removeOddNumbers from './Questions/remOddFromArray';

// 1st Task - Using the splice method to insert the value at the specified index in the array
insertingValueBySplicing([1, 2, 3, 4, 5], 2, 100)

// // 2nd Task - Crud Operations in array
addItem(shoppingCart, { name: 'peaches', quantity: 60 });
updateItem(shoppingCart, 2, 9);
removeItem(shoppingCart, 3);

// 3rd Task - uses a while loop to print the first 25 integers & first 10 even numbers 
whileFunctions();

// 4th Task - Factorial of the Positive number
factorialUsingWhile();

// 5th Task - Removing Negative number from array
remNegativeNumber(7,6, -4, -7, 40)

// 6th Task - Sum of all the numbers in the array
funOfsum(7,6,7,1, -4, -7)

// 7th Task - Convert each temperature to Fahrenheit
convertTemperatureToFahrenheit(7,6,7,1, -4, -7)

// 8th task - Remove all the odd numbers from an array
removeOddNumbers(2,3,6,7,8,9)
